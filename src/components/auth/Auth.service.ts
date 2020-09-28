import { RefObject, useRef, useState } from 'react';

export function useInput(initialValue: any) {
    const [value, setValue] = useState(initialValue);

    const onChange = (event: any) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange,
    };
}

export function useRefInput(...args: any[]): RefObject<HTMLInputElement> {
    const input = useRef<HTMLInputElement>(null);

    args.forEach((fn) => {
        const state = fn(input.current);
        console.log('state', state, input.current?.value);

        if (state) {
            console.log(1);
            
            input.current?.setCustomValidity('valid');
        } else {
            console.log(2);
            input.current?.setCustomValidity('invalid');
            return;
        }
    });

    return input;
}

export class Validators {
    public static required(element: HTMLInputElement) {
        return Number(element?.value.length) > 3;
    }

    public static email(element: HTMLInputElement) {
        const match = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return Boolean(element?.value.match(match));
    }
}
