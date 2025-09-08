import { User } from './entities/user.entity';
import { Model } from 'mongoose';
export declare class UsersService {
    private model;
    constructor(model: Model<User>);
    findByEmail(email: string): import("mongoose").Query<(import("mongoose").FlattenMaps<{
        email: string;
        passwordHash: string;
        roles: string[];
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, User, "findOne", {}>;
    create(email: string, passwordHash: string, roles?: string[]): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    addRoleAdmin(email: string): Promise<(import("mongoose").FlattenMaps<{
        email: string;
        passwordHash: string;
        roles: string[];
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
