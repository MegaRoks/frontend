export class Validators {
    public static emailMatch = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    public static required(element: HTMLInputElement): boolean {
        return Boolean(element?.value.trim());
    }

    public static minLength(length: number) {
        return function (element: HTMLInputElement): boolean {
            return element?.value.length > length;
        };
    }

    public static maxLength(length: number) {
        return function (element: HTMLInputElement): boolean {
            return element?.value.length < length;
        };
    }

    public static identical(value: string | number) {
        return function (element: HTMLInputElement): boolean {
            return element?.value === value;
        };
    }

    public static email(match: RegExp = this.emailMatch) {
        return function (element: HTMLInputElement): boolean {
            return Boolean(element?.value.match(match));
        };
    }
}
