import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import indexRoutes from "./routes/index.js";
import userRoutes from "./routes/user.js";
//import auth from "./middleware/auth.js";
import { register} from "./controllers/user.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json())

app.use('/',indexRoutes);
app.use('/user',userRoutes);


const PORT =  process.env.PORT || 5000;

mongoose.connect(MONGO_STRING,{ useNewUrlParser: true,useUnifiedTopology: true  })
    .then(()=>app.listen(PORT,
          ()=>console.log(`Server running on: ${PORT}`)))
    .catch((error) =>console.log(error.message));
    mongoose.set('useCreateIndex',true);

    
  //  app.use(cors);




