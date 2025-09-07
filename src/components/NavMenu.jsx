import { useState } from 'react';
import './NavMenu-module.css'

function NavMenu({onChange, onSetPage, onLoginChange, loggedIn})
{
    const [page, setPage] = useState(onSetPage)

    const pages = [
        {label: "Home", page: 'home'},
        {label: "Cars", page: 'cars'},
        {label: "About Us", page: 'about'},
        {label: "Contact Us", page: 'contact'},
        //{label: "Admin", page: 'admin'}
    ]

    // temp variable
    //const [isLoggedIn, setIsLoggedIn] = useState(false)

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

            {loggedIn ? 
                <div className='loginBtn'>
                    <button 
                        className="navBtn fs-5" 
                        onClick={() => setPage(prev => {const newStatus = "admin"; onChange(newStatus); return newStatus})}>
                        <img src={'./symbols/icon-admin-edit.png'} alt="admin edit page icon"></img>
                    </button>
                    <button 
                        className="navBtn fs-5" 
                        onClick={() => {{onLoginChange(false)} {window.location.reload()}}}>
                        <img src={'./symbols/icon-exit.png'} alt="admin log out icon"></img>
                    </button>
                </div>
             : 
                <div className='loginBtn'>
                    <button 
                        className="navBtn fs-5" 
                        //onClick={() => {onLoginChange(true);}}>
                        onClick={() => setPage(prev => {const newStatus = "admin-login"; onChange(newStatus); return newStatus})}>
                        <img src={'./symbols/icon-adminlogin.png'} alt="admin login icon"></img>
                    </button>
                </div>
            }
        </header>
    )
}

export default NavMenu;


