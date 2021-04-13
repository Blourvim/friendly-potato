import UserModal from "../Schemas/userSchema.js";

//TODO consider this approach later when DRY
const statusSender = async(stat)=>{
if(401) return("bad?");

}
const checkName  = async(req)=>{
    if(res.locals.decodedJWT?.id)return(res.locals.decodedJWT.id);

    if(req.body.suggestedBy)     return(`${req.body.suggestedBy} unregistered`);

    return("anonymous");
};
export const suggest = async (req, res) => {
    //for some reason, if  req.body.wantedListOwnerId is missing, 
    //it probably defaults to the first user docs in DB ??
    const suggestedBy = await checkName(req);
    const {toFind} = req.body.wantedListOwnerId;
    //TODO gotta change into anilist id for integration of new api
    await UserModal.findById(req.body.wantedListOwnerId).lean
    .then(async(user)=>{
            if(user.private===false){ 
                //TODO DRY AND TO NEW FORMAT
            const result = await UserModal.findByIdAndUpdate(user._id,{"$push":{$each:{
                item:req.body.item,
                msg:req.body.message,
                by:suggestedBy
            }}
            },{safe: true, upsert: true, new : true, useFindAndModify:false},);
            console.log(result);

            res.status(201).json({message:"you suggestion has been made"});

                 return;
                }
                    //is friends ?
            if (user.friends.includes(res.locals.decodedJWT._id))
              {
                  //TODO DRY 
                const result = await UserModal.findByIdAndUpdate(user._id,{"$push":{$each:{
                    item:req.body.item,
                    msg:req.body.message,
                    by:suggestedBy
                }}
             
                },{safe: true, upsert: true, new : true, useFindAndModify:false});
                console.log(result);
    
                res.status(201).json({message:"you suggestion has been made"});
                return;
    
            }
            res.status(401).json({
                message:"User is private, need to confirm friendship",

                //DRY into basic info
                id:wantedListOwner._id,
                picture:wantedListOwner.picture,
                name:wantedListOwner.name,

        }); return;
        
    })
    .catch((error)=>console.log(`${error} +++from suggest`))

}
export const addToListSelf = async(req,res)=>{
    if(res.locals.decodedJWT?.id){
        try {
            UserModal.findByIdAndUpdate(user._id,{"$push":
            {list:req.body.item,
            comments:req.body.comment,
            ratings:req.body.rating}})
            .then(res.status(201).json({message:"item added"}));
            return;
    }

            
        catch (error) {
            console.log("addTolistSelf error    "+ error.message);
            res.status(404).json({message:"some error"});
            return;
        }
    
}res.status(401).json({message:"Please log in to continue"});
return }

            //TODO DRY
export const getAnotherlist=async(req,res)=>{
await UserModal.findById(req.body.wantedListOwnerId)
.then(user =>{
    const isFriends = user.friends.includes(res.locals.decodedJWT?.id);
    if(!user.private){

        res.status(200).json({request:user.list},{message:"all good list sent"});
        return;
    }
    if(isFriends){

        res.status(200).json({request:user.list},{message:"all good list sent"});
        return;
    }
    res.status(401).json({message:"user is private, need to confirm friendship"})
        return;

} )
}


//TODO consider making res.status parts DRY