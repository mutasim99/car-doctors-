'use server'
import { collectionName, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const data = await req.json();
    const bookingCollection = await dbConnect(collectionName.bookingCollection)
    const result = await bookingCollection.insertOne(data)
    return NextResponse.json(result)
}