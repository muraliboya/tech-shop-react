import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-between px-8 bg-gray-800 text-white align-center p-4">
            <div className='text-2xl'><p> Tech Product </p></div>
            <div className='flex gap-6 text-3xl'> 
                <p className="material-symbols-outlined">
                    search
                </p>
                <p className="material-symbols-outlined">
                    shopping_cart
                </p>
                <p className="material-symbols-outlined">person</p>
            </div>

        </div>
    )
}

export default Header
