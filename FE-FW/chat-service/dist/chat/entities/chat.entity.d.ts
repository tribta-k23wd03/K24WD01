import { HydratedDocument } from 'mongoose';
export type ChatDocument = HydratedDocument<Chat>;
export declare class Chat {
    id: string;
    text: string;
    at: number;
    from: string;
}
export declare const ChatSchema: import("mongoose").Schema<Chat, import("mongoose").Model<Chat, any, any, any, import("mongoose").Document<unknown, any, Chat, any, {}> & Chat & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Chat, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Chat>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Chat> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
