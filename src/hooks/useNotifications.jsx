import {NotificationsContext} from '../components/providers/index';
import {useContext} from 'react';

export const useNotifications = () => useContext(NotificationsContext);