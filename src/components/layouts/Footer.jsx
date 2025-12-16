const footerEls = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Contact Us', href: '#contact' },
]

export const Footer = () => {
    return (
        <footer className="relative flex justify-center items-center p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
            <div className="relative flex flex-col items-center gap-3">
                <div className="flex gap-6 text-sm">
                    {footerEls.map(el => (
                        <a key={el.href} href={el.href} className="hover:text-purple-400 transition-colors duration-300 text-center">
                            {el.name}
                        </a>
                    ))}
                </div>
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Fortnite Shop. All rights reserved.</p>
            </div>
        </footer>
    )
}