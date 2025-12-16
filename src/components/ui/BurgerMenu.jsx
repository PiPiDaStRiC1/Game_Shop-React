const menuItems = [
    {href: '#auth', label: 'Log in'},
    {href: '#home', label: 'Home'},
    {href: '#features', label: 'Features'},
    {href: '#products', label: 'Products'},
    {href: '#about', label: 'About'},
];

export const BurgerMenu = () => {
    return (
        <>
            <nav 
                className="absolute p-2 left-0 top-20 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white gap-[1rem] rounded-b-lg shadow-xl z-50 origin-top animate-[dropdown_220ms_ease-out]"
                role="menu"
            >
                <ul className="gap-1 items-center flex flex-col">
                    {menuItems.map((item, index) => (
                        <li className="w-full" key={item.href}>
                            <a
                                href={item.href}
                                className="px-6 py-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center font-medium"
                                role="menuitem"
                                style={{
                                    opacity: 0,
                                    animation: `slideFade ease-out ${(index + 1) * 200}ms forwards`,
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}