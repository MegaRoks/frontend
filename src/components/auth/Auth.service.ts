import { useRef, useState } from 'react';

interface IFnsValidators {
    (element: HTMLInputElement): boolean;
}

export function useInput(initialValue: string | number, fnsValidator?: IFnsValidators[]) {
    const [value, setValue] = useState(initialValue);
    const ref = useRef<HTMLInputElement>(null);

    const onChange = (event: any) => {
        setValue(event.target.value);

        fnsValidator?.every((fn) => {
            if (ref.current) {
                const state = fn(ref.current);
                if (state) {
                    ref.current?.classList.remove('invalid');
                    ref.current?.classList.add('valid');
                    ref.current?.removeAttribute(`error-${ref.current?.id}`);
                } else {
                    ref.current?.classList.remove('valid');
                    ref.current?.classList.add('invalid');
                    ref.current?.setAttribute(`error-${ref.current?.id}`, 'true');
                }

                return state;
            }
        });
    };

    return {
        value,
        onChange,
        ref,
    };
}

export function useButton(...args: any[]) {
    const fromRef = useRef<HTMLFormElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    args.some((arg) => {
        const isInput = fromRef.current?.getElementsByTagName('input').namedItem(arg.current?.id)?.getAttribute(`error-${arg.current?.id}`);
        if (isInput) {
            buttonRef.current?.setAttribute('disabled', 'true');
        } else {
            buttonRef.current?.removeAttribute('disabled');
        }

        return isInput;
    });

    return { fromRef, buttonRef };
}
