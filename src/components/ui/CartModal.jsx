import {CartItem} from './CartItem.jsx';
import {useCartContext} from '../providers/index'

export const CartModal = (props) => {
    const {animation, onClick} = props;
    const {storage, totalPrice, totalItems, remove} = useCartContext();

    return (
        <article className={`
            flex
            flex-col
            gap-5
            bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
            max-w-[45rem] 
            h-auto
            rounded-2xl 
            shadow-2xl
            z-20
            p-6
            container
            border-2 border-purple-600/30
            ${animation}
        `}>
            <div className="flex items-center justify-between">
                <h1 className="text-white text-[1.7rem] xxsm:text-[2rem] font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {totalItems ? `🛒 ${totalItems} item${totalItems > 1 ? 's' : ''} in cart` : '🛒 Shopping Cart'}
                </h1>
                <button 
                    className="text-white text-[2.5rem] hover:text-purple-400 transition-colors duration-300 select-none w-10 h-10 flex items-center justify-center"
                    onClick={onClick}
                >
                    &times;
                </button>
            </div>
            
            <div className='flex flex-col gap-3 max-h-[23rem]'>
                <h2 className="text-purple-300 text-sm uppercase tracking-wider font-semibold">Your Items:</h2>
                {totalItems ? 
                    <ol className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
                        {Object.values(storage).map(item => (
                            item.quantity > 0 && <CartItem key={item.id} {...item}/>
                        ))}
                    </ol> 
                    : 
                    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 w-full py-12 rounded-xl border border-gray-700">
                        <div className="text-6xl mb-3">🛍️</div>
                        <span className="text-gray-400 text-lg">No items in the cart yet</span>
                    </div>
                }
            </div>
            
            <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
                <span className="text-white text-xl">
                    <span className="text-gray-400">Total:</span> <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{totalPrice} V-Bucks</span>
                </span>
            </div>
            
            <div className="flex gap-3">
                <button 
                    className="flex-1 text-[0.9rem] xxsm:text-[1rem] bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-bold text-white text-lg hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!totalItems}
                >
                    {totalItems ? 'Order' : 'Add items to order'}
                </button>
                <button 
                    className="px-6 text-[0.9rem] xxsm:text-[1rem] bg-gradient-to-r from-red-600 to-pink-600 p-4 rounded-xl shadow-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 font-bold text-white hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!totalItems}
                    onClick={() => {
                        Object.keys(storage).forEach(id => {
                            remove(id);
                        });
                    }}
                >
                    Clear All
                </button>
            </div>
        </article>
    )
}