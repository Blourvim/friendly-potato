import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import axios from 'axios';

import UserModal from "../Schemas/userSchema.js";
const secret = 'test';
const updateOptions = { safe: true, upsert: true, new: true, useFindAndModify: false }

const acceptFriendRequest = async () => {
  try {

    UserModal.findByIdAndUpdate(clientId, { $push: { friends: targetUser._id } }, { updateOptions });
    UserModal.findByIdAndUpdate(wantedUserId, { $push: { friends: clientId } }, { updateOptions });
    UserModal.findOneAndDelete(clientUser._id).select({ friendInvites: clientId }, { updateOptions });
    res.status(201).json({ message: "Friend added!" });


  } catch (error) {
    console.log(error + "++ from acceptFriend")
  }
};



export const login = async (req, res) => {
  const fragment = req.body.headers;
  const query = `query ( $search: String) {
  User(id: 5164353, search: $search) {
    id
    name
     siteUrl 
  
  }
}`

}
try {
  //check if anilist jwt is vailid
  const url = 'https://graphql.anilist.co';
  const accessToken = req.headers.bearer;
  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query
    })
  };
  axios(url, options)
    .then(response => {
      if (response.status > 300) {
        const payload = {
          sub: response.data.id,
          iat: new Date(),
        }
        const options = {
          expiresIn: "2 days"
        }
        jwt.sign(payload, secret, [options])
          .then(token => res.headers.bearer.JSON(token))
      }
    })

} catch (error) {
  console.error(error)

}


//TODO 
//should I check if the user is logged in ??
export const register = async (req, res) => {
  const url = 'https://graphql.anilist.co';
  const accessToken = req.headers.Bearer;
  const query = `
  query($id:Int){
  
    
    User(id: $id) {
      id
    	name    
    }
  }
`
  const variables = {
    "id": Jwt.decode(req.headers.Bearer)
      .then(result => result.sub)
  }


  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables
    })
  };


  try {

    axios(url, options)
      .then(result => {
        //if success 
        if (result.status <= 300 && result.status >= 200) {

          const { anilistId, name } = result.data.user;
          if (await UserModal.exists({ anilistId })) return res.status(409).json({ message: "User already exists" });

          UserModal.create({ aniListId, name });
          res.status(201).json({ message: "account created " });
          return;
        }
      }).catch(err => console.error(err))


  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "there has been an error" })
  }
};





//TODO  handle the fetching of data from databese more optimized
export const addfriend = async (req, res) => {
  const clientId = res.locals.decodedJWT?.id;
  const loggedIn = res.locals.loggedIn;
  const targetUser = await UserModal.findById(req.body.wantedUserId);

  if (clientId && loggedIn && targetUser) {
    UserModal.findById(clientId)
      .then(clientUser => {

        const targetIsInvited = targetUser.friendInvites.includes(clientId);
        const targetIsFriends = targetUser.friends.includes(clientId);
        const clientIsFriends = clientUser.friends.includes(targetUser._id);
        const clientIsInvited = clientUser.friendInvites.includes(targetUser._id);
        //looking at wanted users list

        if (!targetIsInvited && !targetIsFriends) {

          UserModal.findByIdAndUpdate(targetUser._id,
            { $push: { friendInvites: clientId } },
            { updateOptions },
            a => console.log(a));

          return res.status(201).json({ message: "friend request sent" });
        }
        if (!clientIsFriends && clientIsInvited) { acceptFriendRequest(); return; }

        if (clientIsFriends) {
          res.status(409).json({ message: "Already friends with this clientUser" });
          return;
        }

      })
  }
  res.status(401).json({ message: "Login required" });
  return;
}

