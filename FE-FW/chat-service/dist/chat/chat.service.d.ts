export type ChatMsg = {
    id: string;
    text: string;
    at: number;
    from: string;
};
export declare class ChatService {
    private msgs;
    private cap;
    add(m: ChatMsg): void;
    recent(): ChatMsg[];
}
