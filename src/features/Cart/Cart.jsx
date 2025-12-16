import {useState} from 'react';
import {ShoppingBasketIcon} from 'lucide-react';
import {CartModal, Notification} from '../../components/ui/index';
import {useNotifications} from '../../hooks/index';


export const Cart = ({children}) => {
    const {notifState} = useNotifications();
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const open = () => {
        setIsMounted(true);
        setIsVisible(true);
    };

    const close = (event) => {
        if (event.target !== event.currentTarget) return;
        setIsVisible(false);
        setTimeout(() => setIsMounted(false), 300);
    };

    return (
        <>
            <button
                className="
                    flex
                    fixed
                    w-[3.5rem]
                    h-[3.5rem]
                    bg-emerald-300
                    top-[4rem]
                    right-0
                    rounded-[5px]
                    shadow-lg
                    m-5
                    justify-center
                    items-center
                    hover:bg-emerald-400
                    z-10
                "
                onClick={open}
                >
                <ShoppingBasketIcon className='w-[2.5rem] h-[2.5rem]'/>
                {children}
            </button>
            {isMounted && (
                <div 
                    className="bg-black/50 fixed top-0 left-0 w-full h-full flex justify-center items-start z-20 p-5" 
                    onClick={close}
                >
                    <CartModal 
                        onClick={close} 
                        animation={isVisible ? "fadeIn" : "fadeOut"} 
                    /> 
                </div>
            )}
            {notifState.notifications.length > 0 && (
                notifState.notifications.map(notification => {
                    return <Notification key={notification.id} value={notification} />
                })
            )}
        </>
    )
}