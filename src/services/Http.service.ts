export class Http {
    public static async get(url: string): Promise<any> {
        const headers = this.getHeaders();
        const config: RequestInit = {
            headers,
            method: 'GET',
        };
        return await this.request(url, config);
    }

    public static async post(url: string, body: any): Promise<any> {
        const headers = this.getHeaders();
        const config = {
            headers,
            method: 'POST',
            body: JSON.stringify(body),
        };
        return await this.request(url, config);
    }

    public static async put(url: string, body: any): Promise<any> {
        const headers = this.getHeaders();
        const config = {
            headers,
            method: 'PUT',
            body: JSON.stringify(body),
        };
        return await this.request(url, config);
    }

    private static getHeaders() {
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer `,
        };
    }

    private static async request(url: string, config: RequestInit): Promise<any> {
        return await fetch(url, config)
            .then((res) => res.json())
            .catch((err) => {
                throw Error(err);
            });
    }
}
