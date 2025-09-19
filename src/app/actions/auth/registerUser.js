"use server"

import { collectionName, dbConnect } from '@/lib/dbConnect'
import bcrypt from "bcryptjs";

export default async function registerUser(payload) {
    const userCollection = await dbConnect(collectionName.userCollection);

    const { email, password, name } = payload;
    if (!email || !password) {
        return null
    }
    const user = await userCollection.findOne({ email: payload.email });

    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        const result = await userCollection.insertOne(payload);
        return result
    }
    return null

}
