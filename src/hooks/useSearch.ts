'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

export function useSearch(delay = 300) {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setDebouncedQuery(query);
        }, delay);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [query, delay]);

    const clearQuery = useCallback(() => {
        setQuery('');
        setDebouncedQuery('');
    }, []);

    return { query, setQuery, debouncedQuery, clearQuery };
}
