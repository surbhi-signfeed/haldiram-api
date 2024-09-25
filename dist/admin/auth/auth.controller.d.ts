import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        accessToken?: string;
        id: number;
        store_id: number;
        status: number;
    }>;
}
