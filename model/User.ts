import mongoose, { Schema, model, models } from "mongoose";

export interface Iuser {
  userName: string;
  email: string;
  password: string;
  resetToken: { type: String },
  resetExpires: { type: Date },
  _id: mongoose.Types.ObjectId;
  currentdata: Date;   // createdAt renamed
  modifieddata: Date;  // updatedAt renamed
}

const userSchema = new Schema<Iuser>(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: { createdAt: 'currentdata', updatedAt: 'modifieddata' } }
);

const User = models.User || model<Iuser>("User", userSchema);
export default User;
