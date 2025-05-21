import mongoose from "mongoose";

const Mongodb_uri = process.env.MongoDB_URI!;
if (!Mongodb_uri) {
  throw new Error("please first give a mongodb string");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,  // note: correct spelling is bufferCommands, not bufferCommand
      maxPoolSize: 10,
      // You can add useNewUrlParser and useUnifiedTopology if you want, but mongoose 6+ has them true by default
    };

    cached.promise = mongoose.connect(Mongodb_uri, opts).then(() => mongoose.connection);
  }

  try {
    cached.conn = await cached.promise;
    console.log("Database connected");
  } catch (error) {
    cached.promise = null;
    console.error("MongoDB connection error:", error);
    throw error;
  }

  return cached.conn;
}
