import { useState } from 'react';
import {Menu} from 'lucide-react';
import {BurgerMenu} from '../ui/index'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative flex justify-between items-center h-20 px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-400 text-white gap-[1rem] shadow-2xl">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <a href="#" className="relative text-2xl xxsm:text-3xl font-bold tracking-wider hover:scale-105 transition-transform duration-300 drop-shadow-lg lg:text-2xl">
                🎮 Fortnite Shop
            </a>
            <ul className="relative flex gap-2 h-16 items-center hidden lg:flex">
                <li>
                    <a href="#home" className="px-6 py-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center font-medium">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#features" className="px-6 py-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center font-medium">
                        Features
                    </a>
                </li>
                <li>
                    <a href="#products" className="px-6 py-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center font-medium">
                        Products
                    </a>
                </li>
                <li>
                    <a href="#about" className="px-6 py-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center font-medium">
                        About
                    </a>
                </li>
            </ul>
            <a href="#auth" className="relative px-6 py-2 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:scale-105 hidden lg:block">
                Log in
            </a>
            <button 
                className="relative p-2 text-white z-100 block lg:hidden"
                aria-label="Open menu"
                aria-expanded="false"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Menu size={28}/>
            </button>
            {isMenuOpen && <BurgerMenu />}
        </header>
    )
}