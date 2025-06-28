import './NavMenu-module.css'

function NavMenu()
{
    return (
        <header className="bg-secondary p-1 text-center">
            <button className="fs-5 ms-4 me-4" disabled>Home</button>
            <button className="fs-5 ms-4 me-4 current">Cars</button>
            <button className="fs-5 ms-4 me-4" disabled>About Us</button>
            <button className="fs-5 ms-4 me-4" disabled>Contact Us</button>
        </header>
    )
}

export default NavMenu;