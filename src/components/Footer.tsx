import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-200 py-8">
            <div className="w-full flex flex-col items-center">
                <div>Copyright &copy; {new Date().getFullYear()} {process.env.SITE_NAME}</div>
            </div>
        </footer>
    );
}