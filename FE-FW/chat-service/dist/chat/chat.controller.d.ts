import { ChatService } from './chat.service';
export declare class ChatController {
    private chat;
    constructor(chat: ChatService);
    history(): import("mongoose").Query<(import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("./entities/chat.entity").Chat, {}, {}> & import("./entities/chat.entity").Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./entities/chat.entity").Chat, {}, {}> & import("./entities/chat.entity").Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, {}> & import("mongoose").Document<unknown, {}, import("./entities/chat.entity").Chat, {}, {}> & import("./entities/chat.entity").Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, import("./entities/chat.entity").Chat, {}, {}> & import("./entities/chat.entity").Chat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "find", {}>;
}
