import Mongoose,{Schema,Document} from "mongoose";
import { Content } from "next/font/google";

export interface Message extends Document{
    content:string;
    createdAt:Date
}

const MessageSchema:Schema<Message> = new Schema({
     content: {
        type: String,
        required: true
     },
     
})