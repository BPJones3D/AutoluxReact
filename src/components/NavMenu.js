import './NavMenu-module.css'

function NavMenu()
{
    return (
        <header className="bg-secondary p-1 text-center">
            <button className="text-white fs-5 ms-4 me-4 current">Home</button>
            <button className="text-white fs-5 ms-4 me-4">Cars</button>
            <button className="text-white fs-5 ms-4 me-4">About Us</button>
            <button className="text-white fs-5 ms-4 me-4">Contact Us</button>
        </header>
    )
}

export default NavMenu;