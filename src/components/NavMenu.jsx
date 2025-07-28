import { useState } from 'react';
import './NavMenu-module.css'

function NavMenu({onChange, onSetPage})
{
    const [page, setPage] = useState(onSetPage)

    const pages = [
        {label: "Home", page: 'home'},
        {label: "Cars", page: 'cars'},
        {label: "About Us", page: 'about'},
        {label: "Contact Us", page: 'contact'},
        {label: "Admin", page: 'admin'}
    ]

    return (
        <header className="navBtn bg-secondary p-1 text-center">
            {pages.map((option) => (
                option.page === onSetPage ? (
                    <button 
                        className="navBtn fs-5 ms-4 me-4 current" 
                        onClick={() => setPage(prev => {const newStatus = option.page; onChange(newStatus); return newStatus})}>
                            {option.label}
                    </button>
                ) : (
                    <button 
                        className="navBtn fs-5 ms-4 me-4" 
                        onClick={() => setPage(prev => {const newStatus = option.page; onChange(newStatus); return newStatus})}>
                            {option.label}
                    </button>
                )
            ))}
        </header>
    )
}

export default NavMenu;


