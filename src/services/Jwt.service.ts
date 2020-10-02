import jwtDecode from 'jwt-decode';

interface IJwt<T> {
    readonly [key: string]: T;
}

export class Jwt {
    public static decode<T>(token: string): IJwt<T> {
        return jwtDecode(token);
    }
}
