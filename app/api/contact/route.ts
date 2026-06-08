import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import ContactEmail from "@/components/ContactEmail";

async function sendContactEmail( name: string,
  email: string,
  message: string) {
    try {
        await resend.emails.send({
            from:"contact@kuberpathak.com.np",
            to:"kuberpathak124@gmail.com",
            replyTo: email,
            subject:`New Contact on portfolio from ${name}`,
            react:ContactEmail({name,email,message}),
        });
        return {success:true,message:"Successfully sent email."}
    } catch (error) {
        console.error("Error sending Email")
        return {success:false,message:"Failed to send email."}
    }

}

import { dbConnect } from "@/lib/dbConnect";
export async function POST(request:Request) {
    // await dbConnect()

    try {
        const {name,email,message}= await request.json()
        const emailResponse = await sendContactEmail(
            name,
            email,
            message
        );
        console.log("email response is ",emailResponse)
        if (!emailResponse.success) {
            return Response.json(
            {
                success: false,
                message: emailResponse.message,
            },
            { status: 500 });
        }else{
        return NextResponse.json({
            success: true,
            message: "Contact message sent successfully",
        });
    }
    } catch (error) {
        console.error("Error during contact email routing")
        return NextResponse.json(
        {
            success: false,
            message: "Server error",
        },
        { status: 500 });
    }
}