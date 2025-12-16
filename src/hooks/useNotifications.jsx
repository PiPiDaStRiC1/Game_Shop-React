import {NotificationsContext} from '../components/common/index';
import {useContext} from 'react';

export const useNotifications = () => useContext(NotificationsContext);