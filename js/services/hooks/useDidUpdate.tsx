import {useRef, useEffect, useState} from 'react';

export default function useDidUpdate(callback: () => void, deps: any[]) {
    const hasMount = useRef(false);

    useEffect(() => {
        if (hasMount.current) {
            callback();
        } else {
            hasMount.current = true;
        }
    }, [callback, ...deps]);
}
