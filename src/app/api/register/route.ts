import { NextResponse } from 'next/server';
import User from '../../../../model/User';
import connectToDatabase from '../../../../db';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    console.log('Connecting to database...');
    await connectToDatabase();
    console.log('Connected to database');

    const { userName, email, password } = await req.json();
    console.log('Form data received:', { userName, email });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists.');
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    console.log('New user created:', newUser);

    return NextResponse.json({ message: 'User registered successfully', user: newUser });
  } catch (error: any) {
    console.error(' REGISTER ERROR:', error.message, error);
    return NextResponse.json(
      { message: 'Something went wrong', error: error.message },
      { status: 500 }
    );
  }
}
