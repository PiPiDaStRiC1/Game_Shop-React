import {useCartContext} from '../common/index';
import {useNotifications} from '../../hooks/index'

export const CartItem = (props) => {
    const {id, name, price} = props;
    const {remove, getCurrentQuantity, addQuantity, decrementQuantity} = useCartContext();
    const itemQuantity = getCurrentQuantity(id);
    const {addNotification} = useNotifications();

    return (
        <>
        {itemQuantity ?         
            <li className="min-w-[10rem]">
                <div className="flex justify-between items-center bg-white w-full h-[2rem] text-black px-2 rounded-md shadow-lg">
                    <div className="flex gap-3 items-center">
                        <span>{name}</span>
                        <div className="flex gap-1.5 items-center">
                            <button 
                                className="text-[1.6rem] select-none"
                                onClick={() => {
                                    decrementQuantity(id);
                                    addNotification({id, name, price}, 1, 'remove');
                                }}
                            >
                                -
                            </button>
                            <span className="select-none">x{itemQuantity}</span>
                            <button 
                                className="text-[1.2rem] select-none"
                                onClick={() => {
                                    addQuantity(id);
                                    addNotification({id, name, price}, 1);
                                }}
                            >
                                +
                            </button>
                        </div>
                        <span>{price}$</span>
                    </div>
                    <button 
                        className="flex justify-center items-center text-[1.5rem] h-full select-none"
                        onClick={() => {
                            addNotification({id, name, price}, itemQuantity, 'remove');
                            remove(id);
                        }}
                    >
                        {'\u00D7'}
                    </button>
                </div>
            </li> : null}
        </>
    )   
}