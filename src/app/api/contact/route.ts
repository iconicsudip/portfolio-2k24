import { sendMessage } from "@/lib/contact/data";
import { getResponse } from "@/utils/functions";
import { NextResponse } from "next/server";

export const POST = async (req:Request, res:Response) => {
    try{
        const data = await req.json();
        sendMessage(data)
        return NextResponse.json(getResponse("Message sent successfully",200));
    }catch(e){
        return NextResponse.json(getResponse("Failed to send message",500));
    }
}