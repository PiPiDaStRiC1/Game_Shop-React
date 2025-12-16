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
        <div className='flex flex-wrap gap-[2rem] justify-center relative'>
            {isLoading ? 
                <h1>Loading...</h1> : 
                error ? 
                <h1>{error.message}</h1> :
                data && data.slice(0, 15).map(item => <FTItem key={item.id} {...item}/>)
            }
        </div>
    )
}