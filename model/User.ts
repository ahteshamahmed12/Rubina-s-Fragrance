import mongoose, { Schema, model, models } from "mongoose";

export interface Iuser{
    userName:string
    email:string,
    password:string,
    _id:mongoose.Types.ObjectId
    createdAt:Date
    modifiedAt:Date

}

const userSchema = new Schema<Iuser>({
    userName:{type:String , required:true},
    email:{type:String , required:true , unique: true},
    password:{type:String , required:true }
},
{timestamps: { createdAt: 'currentdata', updatedAt: 'modifieddate' }}
)

const User = models.User || model<Iuser>("User", userSchema);
export default User;