import {CartItem} from './CartItem.jsx';
import {useCartContext} from '../common/index'

export const CartModal = (props) => {
    const {animation, onClick} = props;
    const {storage, totalPrice, totalItems} = useCartContext();

    return (
        <article className={`
            flex
            flex-col
            gap-3
            fixed
            bg-emerald-400 
            max-w-[40rem] 
            h-auto
            rounded-lg 
            shadow-lg
            right-[50vw]
            translate-x-[50%]
            top-[10rem]
            z-20
            p-5
            container
            ${animation}
        `}>
            <h1 className="text-white text-[1.5rem]">
                {totalItems ? `${totalItems} item${totalItems > 1 ? 's' : ''} in the cart:` : 'Cart is empty'}
            </h1>
            <div className='flex flex-col gap-[0.5rem]'>
                <h1 className="text-white">Your Items:</h1>
                {totalItems ? <ol className="list-decimal pl-6 flex flex-col gap-2 text-white">
                    {Object.values(storage).map(item => (
                        item.quantity > 0 && <CartItem key={item.id} {...item}/>
                    ))}
                </ol> : <div className="flex justify-center items-center bg-white w-full h-[2rem] text-black px-2 rounded-md shadow-lg">No items in the cart</div>}
            </div>
            <button 
                className="absolute top-0 right-0 text-[2rem] select-none mr-[1.5rem]"
                onClick={onClick}
            >
                &times;
            </button>
            <span className="text-white">
                <b>Total:</b> {totalPrice}$
            </span>
            <button className='bg-white p-2 rounded-[1rem] shadow-lg hover:bg-white/80 active:bg-white/80'>Order</button>
        </article>
    )
}