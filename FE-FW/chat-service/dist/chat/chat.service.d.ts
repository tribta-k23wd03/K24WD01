import { Chat, ChatDocument } from './entities/chat.entity';
import { Model } from 'mongoose';
import { CreateChatDto } from './dto/chat.dto';
export declare class ChatService {
    private model;
    constructor(model: Model<ChatDocument>);
    add(dto: CreateChatDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Chat, {}, {}> & Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Chat, {}, {}> & Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    recent(): import("mongoose").Query<(import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, Chat, {}, {}> & Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Chat, {}, {}> & Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, Chat, {}, {}> & Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Chat, {}, {}> & Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
}
