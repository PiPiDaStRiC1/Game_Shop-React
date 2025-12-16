export const Footer = () => {
    return (
        <footer className="relative flex justify-center items-center p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent"></div>
            <div className="relative flex flex-col items-center gap-3">
                <div className="flex gap-6 text-sm">
                    <a href="#privacy" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
                    <span className="text-gray-600">|</span>
                    <a href="#terms" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
                    <span className="text-gray-600">|</span>
                    <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact Us</a>
                </div>
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Fortnite Shop. All rights reserved.</p>
            </div>
        </footer>
    )
}