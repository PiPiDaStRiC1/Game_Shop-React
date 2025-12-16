export const Notification = (props) => {
    const {name, quantity, status, timestamp} = props.value;
    return (
        <div 
            className='fixed right-0 w-[10rem] z-30 bg-gray-800 text-white p-2 mr-[5rem] rounded-md shadow-lg notificationSlideIn'
            key={timestamp}
        >
            {name} {quantity !== 1 ? `x${quantity}` : ''} has been {status === 'add' ? 'added to' : 'removed from'} the cart at {timestamp}.
        </div>
    )
}