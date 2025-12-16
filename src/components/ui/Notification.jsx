export const Notification = (props) => {
    const {name, quantity, status, timestamp} = props.value;

    const getNotificationStyles = () => {
        return status === 'add' ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-400' : 'bg-gradient-to-r from-pink-500 to-red-500 border-red-400';
    };

    return (
        <div 
            className={`notificationSlideIn fixed bottom-5 w-[18rem] right-5 z-30 text-white p-5 rounded-xl shadow-2xl slideIn flex items-center gap-3 max-w-sm border-2 ${getNotificationStyles()}`}
            key={timestamp}
        >
            <span className="text-2xl font-bold">{status === 'add' ? '✓' : '✕'}</span>
            <div className="flex-1">
                <p className="font-medium">{name} {quantity !== 1 ? `x${quantity}` : ''}</p>
                <p className="text-sm opacity-90">has been {status === 'add' ? 'added to' : 'removed from'} the cart</p>
            </div>
        </div>
    )
}