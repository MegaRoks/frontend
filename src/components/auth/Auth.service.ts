import { useState } from 'react';

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
