import { useEffect, useState } from 'react';
import { fetchFTItems } from '../../lib/api/index';
import { FTItem } from './FTItem'


export const FTItems = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchFTItems()
            .then(response => {
                setIsLoading(false);
                setData(response.items);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            })
    }, [])

    return (
        <div className='flex flex-wrap gap-[1rem] lg:gap-[2rem] justify-center relative p-8'>
            {isLoading ? 
                <div className="flex flex-col items-center gap-4 py-20">
                    <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">Loading awesome items...</h1>
                </div> : 
                error ? 
                <div className="flex flex-col items-center gap-2 py-20">
                    <div className="text-6xl">⚠️</div>
                    <h1 className="text-xl text-red-400 font-semibold text-center">{error.message}</h1>
                    <h1 className="text-xl text-red-400 font-semibold text-center">
                        Maybe{" "}
                        <a
                            href="https://fortniteapi.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-red hover:text-red-600"
                        >
                            fortniteapi.io
                        </a>{" "}
                        is not available now
                    </h1>
                </div> :
                data && data.slice(0, 30).map((item, index) => (
                    <FTItem key={item.id} index={index} {...item} />
                ))
            }
        </div>
    )
}