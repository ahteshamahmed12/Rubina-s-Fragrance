import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../db';
import User from '../../../../model/User';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    console.log('Connecting to DB...');
    await connectToDatabase();
    console.log('Connected to DB');

    const { userName, email, password } = await req.json();
    console.log('Request Body:', { userName, email });

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('User saved');

    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error: any) {
    console.error('REGISTER ERROR:', error);
    return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
  }
}
