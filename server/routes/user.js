import express from "express";
const router = express.Router();

import { addfriend, login, register,acceptFriendRequest} from "../controllers/user.js";
import {addToListSelf, getAnotherlist, suggest} from "../controllers/list.js";
import {auth} from "../middleware/auth.js"

router.post("/login", login);
router.post("/register", register);
router.post("/GetAnotherlist",auth,getAnotherlist);
router.post("/addToListSelf",auth,addToListSelf);
router.post("/suggest",auth,suggest);
router.post("/addFriend",auth,addfriend);
router.post("acceptFriendRequest",auth,acceptFriendRequest)

export default router;