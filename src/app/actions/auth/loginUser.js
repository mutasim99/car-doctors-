"use server"
import bcrypt from 'bcryptjs'
import { collectionName, dbConnect } from "@/lib/dbConnect";

export default async function logInUser(payload) {
    const { email, password } = payload;
    const userCollection = await dbConnect(collectionName.userCollection);
    const user = await userCollection.findOne({ email });
    if (!user) {
        return null
    }
    const isPasswordOk = bcrypt.compare(user.password, password)
    if (!isPasswordOk) {
        return null
    }
    return user;
}