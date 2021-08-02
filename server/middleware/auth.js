import jwt from "jsonwebtoken";

const secret = process.env.SECRET ||"test";

const messageFrom = " from auth.js"

export const auth = async(req,res,next)=>{
 try {
   jwt.verify(req.headers.authorization,secret,(error,decoded)=>{
    if(error){
      res.locals.loggedIn=false;
      console.log(error.message + messageFrom)
        next();
        return;
    }
      //consider optimizing the data sent
      res.locals.decodedJWT = decoded;
      res.locals.loggedIn=true;
      console.log("got auth")

      next();
      return;

   });
 } catch (error) {console.log(error.message + messageFrom);}


};