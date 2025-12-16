import {useCartContext} from '../common/index';

export const ItemsCounter = () => {
    const {totalItems} = useCartContext();

    return (
        <>
            {totalItems > 0 ? 
            <div className="absolute block rounded-[50%] bg-emerald-700 w-[1rem] h-[1rem] top-[-0.4rem] right-[-0.4rem] z-10">
                <span className='text-white text-[0.8rem] flex justify-center items-center h-full'>
                    {totalItems}
                </span>
            </div> : null}       
        </>
    )
}