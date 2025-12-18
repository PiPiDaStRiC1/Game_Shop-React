import {CartProvider, NotificationsProvider} from '../providers/index';

export const Main = ({children}) => {
    return (
        <NotificationsProvider>
            <CartProvider>
                    <main className="relative min-h-[calc(100dvh-196px)] p-5 w-full bg-emerald-100">
                        {children}
                    </main>
            </CartProvider>
        </NotificationsProvider>
    )
}