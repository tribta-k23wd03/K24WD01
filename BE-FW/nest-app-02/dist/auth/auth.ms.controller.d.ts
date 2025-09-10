export declare class AuthMsController {
    private jwt;
    verifyToken(payload: {
        token: string;
    }): {
        sub: any;
        email: any;
        roles: any;
    };
}
