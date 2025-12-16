import {createContext, useReducer} from 'react';

// structure of the notifications state
const initialState = { 
    notifications: []
}

const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

const notificationsReducer = (state, {type, payload}) => {
    switch (type) {
        case ADD_NOTIFICATION:
            return {
                notifications: [...state.notifications, payload]
            }
        case REMOVE_NOTIFICATION:
            return {
                notifications: [...state.notifications.filter(notification => notification.id !== payload.id)]
            }
        default:
            return state;
    }
}

export const NotificationsContext = createContext(null);

export const NotificationsProvider = ({children}) => {
    const [notifState, dispatch] = useReducer(notificationsReducer, initialState);

    const addNotification = (notification, quantity = 1, status = 'add') => {
        const id = crypto.randomUUID();

        dispatch({ 
            type: ADD_NOTIFICATION,
            payload: {
                ...notification, 
                quantity, 
                status,
                timestamp: 
                    new Date().getHours() + ':' + (new Date().getMinutes().toString().length === 1 ? '0' + new Date().getMinutes() : new Date().getMinutes()),
                id: id
            } 
        });

        setTimeout(() => dispatch({
            type: REMOVE_NOTIFICATION, 
            payload: { id }
        }), 2000);

    }

    const removeNotification = (id) => {
        dispatch({ 
            type: REMOVE_NOTIFICATION, 
            payload: { id }
        });
    }
    
    return (
        <NotificationsContext.Provider value={{notifState, addNotification, removeNotification}}>
            {children}
        </NotificationsContext.Provider>
    );
}
