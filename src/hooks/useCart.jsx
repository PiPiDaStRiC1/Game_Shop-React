import { useState, useEffect, useMemo } from "react"
import {useNotifications} from './useNotifications'

export const useCart = (key = 'cart') => {
    const {addNotification} = useNotifications();

    const [storage, setStorage] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(key)) || {};
        } catch (error) {
            return {};
        }
    });

    const addItem = (item, quantity = 1) => {
        setStorage(prev => {
            const id = item.id;
            const next = {...prev};
            next[id] = next[id] ? 
                {...next[id], quantity: (next[id]?.quantity || 0) + quantity} : 
                {...item, quantity};
            return next;
        });
        addNotification(item);
    }
    
    const addQuantity = (id, quantity = 1) => {
        setStorage(prev => {
            const next = {...prev};
            next[id] = {...next[id], quantity: next[id].quantity + quantity};
            return next;
        })
    }
    
    const decrementQuantity = (id) => {
        setStorage(prev => {
            if (!id) return prev;
            const next = {...prev};
            next[id].quantity <= 1 ? 
                delete next[id] : 
                next[id] = {...next[id], quantity: next[id].quantity - 1};
            return next;
        })
    }

    const getCurrentQuantity = (id) => {
        return storage[id]?.quantity || 0;
    }

    const remove = (id) => {
        setStorage(prev => {
            const next = {...prev};
            delete next[id];
            return next;
        });
    }

    const clear = () => {
        setStorage(() => {
            return {}
        })
    }
    
    useEffect(() => {
        const timerId = setTimeout(() => {
            try {
                localStorage.setItem(key, JSON.stringify(storage))
            } catch (error) {
                console.log(error.message);
            }
        }, 200);
        return () => clearTimeout(timerId);
    }, [storage, key]);

    const totalPrice = useMemo(() => {
        return Object.values(storage).reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [storage]);
    const totalItems = useMemo(() => {
        return Object.values(storage).reduce((acc, _) => acc + 1, 0);
    }, [storage]);

    return {storage, addQuantity, addItem, decrementQuantity, remove, clear, getCurrentQuantity, totalPrice, totalItems}
}