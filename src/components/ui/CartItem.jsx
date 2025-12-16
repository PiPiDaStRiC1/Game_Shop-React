import {useCartContext} from '../common/index';
import {useNotifications} from '../../hooks/index'

export const CartItem = (props) => {
    const {id, name, price} = props;
    const {remove, getCurrentQuantity, addQuantity, decrementQuantity} = useCartContext();
    const itemQuantity = getCurrentQuantity(id);
    const {addNotification} = useNotifications();
    const totalItemPrice = price * itemQuantity;

    return (
        <>
        {itemQuantity ?         
            <li className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-xl shadow-lg border border-gray-700">
                <div className="flex flex-col gap-1 flex-1">
                    <span className="font-bold text-lg text-white">{name}</span>
                    <div className="flex items-center">
                        <span className="text-purple-400 text-sm">{price} V-Bucks</span>
                        <span className="text-gray-400">×</span>
                        <span className="text-pink-400 font-semibold">{itemQuantity}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 flex-col lsm:flex-row">
                    <span className="text-white font-bold text-lg">{totalItemPrice} V-Bucks</span>
                    <div className="flex gap-2">
                        <button 
                            className="w-8 h-8 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 font-bold shadow-md active:scale-95"
                            onClick={() => {
                                decrementQuantity(id);
                                addNotification({id, name, price}, 1, 'remove');
                            }}
                        >
                            -
                        </button>
                        <button 
                            className="w-8 h-8 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 font-bold shadow-md active:scale-95"
                            onClick={() => {
                                addQuantity(id);
                                addNotification({id, name, price}, 1);
                            }}
                        >
                            +
                        </button>
                        <button 
                            className="w-8 h-8 flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-all duration-300 font-bold shadow-md active:scale-95"
                            onClick={() => {
                                addNotification({id, name, price}, itemQuantity, 'remove');
                                remove(id);
                            }}
                        >
                            {'\u00D7'}
                        </button>
                    </div>
                </div>
            </li> : null}
        </>
    )   
}