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
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    bcrypt.compare(password, oldUser.password)
      .then(results => {
        if (results) {
          const token = jwt.sign(
            {
              email: oldUser.email,
              id: oldUser._id
            },
            secret, {
            expiresIn: "1 year"
          });

          res.status(200).json({ result: oldUser, token, });
          return;
        }
        return res.status(400).json({ message: "Invalid credentials" });

      })

  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    return;
  }
};

//TODO 
//should I check if the user is logged in ??
export const register = async (req, res) => {
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
      .then(result => {
        //if success 
        if (result.status <=300 &&result.status >=200) { 

          const { id, name } = result.data.user;
          if (await UserModal.exists({ id })) return res.status(409).json(
            { message: "User already exists" });

            UserModal.create({ aniListId:id, name: name });
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

