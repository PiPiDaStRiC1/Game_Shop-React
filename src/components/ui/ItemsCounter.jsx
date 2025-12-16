import {useCartContext} from '../common/index';

export const ItemsCounter = () => {
    const {totalItems} = useCartContext();

    return (
        <>
            {totalItems > 0 && (
                <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                    {totalItems}
                </span>
            )}
        </>
    )
}