import {useCartContext} from '../providers/index'

export const FTItem = (props) => {
    const {id, name, description, price, images, index = 0} = props;
    const {addItem} = useCartContext();
    const isEager = index < 4; 

    return (
        <div className="group flex flex-col w-[28rem] sm:w-[16rem] md:w-[13rem] lg:w-[16rem] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl justify-between overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 border border-gray-700">
            <div className="relative overflow-hidden">
                <img
                    src={images.full_background} 
                    alt={name} 
                    className="object-top w-full xsm:h-[28rem] sm:h-[14rem] md:h-[12rem] lg:h-[15rem] object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={isEager ? 'eager' : 'lazy'}
                    fetchpriority={isEager ? 'high' : 'auto'}
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {price} V-Bucks
                </div>
            </div>
            <article className="flex flex-col p-5 md:gap-0 gap-3 flex-grow text-white">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {name}
                </h1>
                <h2 className="flex-grow text-gray-300 text-sm leading-relaxed">{description}</h2>
                <div className="flex justify-between items-center gap-3 pt-3 border-t border-gray-700">
                    <button 
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 active:scale-95"
                        onClick={() => addItem({id, name, price}, 1)}
                    >
                        Add to Cart
                    </button>
                </div>
            </article>
        </div>
    )
}