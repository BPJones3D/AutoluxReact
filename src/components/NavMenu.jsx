import './NavMenu-module.css'

function NavMenu()
{
    return (
        <header className="navBtn bg-secondary p-1 text-center">
            <button className="navBtn fs-5 ms-4 me-4" disabled>Home</button>
            <button className="navBtn fs-5 ms-4 me-4 current">Cars</button>
            <button className="navBtn fs-5 ms-4 me-4">About Us</button>
            <button className="navBtn fs-5 ms-4 me-4" disabled>Contact Us</button>
        </header>
    )
}

export default NavMenu;