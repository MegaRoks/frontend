import { connect } from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';

export class Socket {
    private static socket: SocketIOClient.Socket;

    public static connect(accessToken: string): void {
        const connectionConfig: SocketIOClient.ConnectOpts = {
            query: { token: accessToken },
        };

        this.socket = connect(`${process.env.REACT_APP_SERVER_URL}`, connectionConfig);
    }

    public static disconnect(): void {
        this.socket.disconnect();
    }

    public static emit(event: string, data?: any): void {
        this.socket.emit(event, data);
    }

    public static on<T>(event: string): Observable<T> {
        return fromEvent(this.socket, event);
    }

    public static removeEventsListener(...events: string[]): void {
        events.forEach((event: string) => {
            this.socket.removeEventListener(event);
        });
    }
}
