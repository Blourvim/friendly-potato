import mongoose from "mongoose";
import UserModal from "./Schemas/userSchema.js"

//await UserModal.findOneAndDelete().select({friendInvites:clientId})

UserModal.findByIdAndUpdate("605abfe9684db54395722988",{"$push":{friendInvites:{friend:"605abf71684db54395722987"}}},{safe: true, upsert: true, new : true, useFindAndModify:false});

