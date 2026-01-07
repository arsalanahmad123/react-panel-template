export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin';
    createdAt: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    token: string;
    refreshToken?: string;
}

export interface AuthError {
    message: string;
    field?: string;
}
