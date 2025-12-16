export const Footer = () => {
    return (
        <footer 
            className="
            flex 
            justify-center 
            items-center 
            p-5 
            bg-emerald-600 
            text-white
            "
        >
            <p>© {new Date().getFullYear()} Fortnite Shop. All rights reserved.</p>
        </footer>
    )
}