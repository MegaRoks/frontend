import { useRef, useState } from 'react';

// interface IFnValidator {
//     fn(element: HTMLInputElement): boolean;
// }

export function useInput(initialValue: string | number, ...fns: any[]) {
    const [value, setValue] = useState(initialValue);
    const ref = useRef<HTMLInputElement>(null);

    const onChange = (event: any) => {
        setValue(event.target.value);

        fns && fns.some((fn) => {
            const state = fn(ref.current);

            if (state) {
                ref.current?.classList.remove('invalid');
                ref.current?.classList.add('valid');
            } else {
                ref.current?.classList.remove('valid');
                ref.current?.classList.add('invalid');
            }

            return !state;
        });
    };

    return {
        value,
        onChange,
        ref,
    };
}
