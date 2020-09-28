import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export class Http {
    private static headers = {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs',
    };

    public static get(url: string): Observable<any> {
        return ajax({
            url,
            method: 'GET',
            headers: this.headers,
        });
    }

    public static post(url: string, body: any): Observable<any> {
        return ajax({
            url,
            method: 'POST',
            headers: this.headers,
            body,
        });
    }

    public static put(url: string, body: any): Observable<any> {
        return ajax({
            url,
            method: 'PUT',
            headers: this.headers,
            body,
        });
    }

    public static delete(url: string): Observable<any> {
        return ajax({
            url,
            method: 'DELETE',
            headers: this.headers,
        });
    }
}
