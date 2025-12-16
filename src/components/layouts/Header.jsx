export const Header = () => {
    return (
        <header className="flex justify-between items-center h-16 px-5 bg-emerald-500 text-white gap-[1rem]">
            <a href="#">Fortnite Shop</a>
            <ul className="flex w-[400px] h-16 justify-between">
                <li>
                    <a href="#home" className="h-full w-20 hover:bg-emerald-700 flex items-center justify-center">Home</a>
                </li>
                <li>
                    <a href="#features" className="h-full w-20 hover:bg-emerald-700 flex items-center justify-center">Features</a>
                </li>
                <li>
                    <a href="#products" className="h-full w-20 hover:bg-emerald-700 flex items-center justify-center">Products</a>
                </li>
                <li>
                    <a href="#about" className="h-full w-20 hover:bg-emerald-700 flex items-center justify-center">About</a>
                </li>
            </ul>
            <a href="#auth" className="h-full w-20 hover:bg-emerald-700 flex items-center justify-center">Log in</a>
        </header>
    )
}