import jwtDecode from 'jwt-decode';

export class Jwt {
    public static decode(token: string) {
        return jwtDecode(token);
    }
}
