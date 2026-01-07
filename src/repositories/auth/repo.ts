import api from '@/api';

import type { LoginCredentials, LoginResponse, User } from './types';

export class AuthRepository {

    private readonly basePath = '/auth';

    async login(credentials: LoginCredentials): Promise<LoginResponse> {
        const { data } = await api.post<LoginResponse>(
            `${this.basePath}/login`,
            credentials
        );
        return data;
    }

    async logout(): Promise<void> {
        await api.post(`${this.basePath}/logout`);
    }

    async getCurrentUser(): Promise<User> {
        const { data } = await api.get<User>(`${this.basePath}/me`);
        return data;
    }

    async refreshToken(refreshToken: string): Promise<LoginResponse> {
        const { data } = await api.post<LoginResponse>(
            `${this.basePath}/refresh`,
            { refreshToken }
        );
        return data;
    }

    async register(userData: {
        name: string;
        email: string;
        password: string;
    }): Promise<LoginResponse> {
        const { data } = await api.post<LoginResponse>(
            `${this.basePath}/register`,
            userData
        );
        return data;
    }
}


export const authRepository = new AuthRepository();
