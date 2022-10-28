import React from 'react'

export default function Footer({ isDarkMode }) {
    return (
        <footer className={isDarkMode ? 'dark' : ''} >
            <div className='center'>
                <span>Copyright © MoGoS, {new Date().getFullYear()}</span>
                <span>All Rights Reserved</span>
            </div>
        </footer>
    )
}
