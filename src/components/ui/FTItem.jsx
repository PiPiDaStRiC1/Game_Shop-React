import {useCartContext} from '../common/index'

export const FTItem = (props) => {
    const {id, name, description, price, images} = props;
    const {addItem} = useCartContext();

    return (
        <div className="flex flex-col w-[16rem] border-[1px] border-gray-300 rounded-[8px] justify-between">
            <img
                src={images.full_background} 
                alt={name} 
                className="w-[16rem] h-[15rem]"
            />
            <article className="flex flex-col p-[1rem] gap-[0.5rem] flex-grow">
                <h1><b>{name}</b></h1>
                <h2 className="flex-grow">{description}</h2>
                <div className="flex justify-between items-center">
                    <button 
                        className="bg-emerald-600 block p-2 w-[5rem] rounded-[10px] text-white hover:bg-emerald-700"
                        onClick={() => addItem({id, name, price}, 1)}
                    >
                        Add
                    </button>
                    <p>{price}</p>
                </div>
            </article>
        </div>
    )
}