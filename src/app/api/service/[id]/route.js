import { collectionName, dbConnect } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
export const GET = async (req, { params }) => {
    const p = await params
    const servicesCollection = await dbConnect(collectionName.serviceCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
    return NextResponse.json(data)
}