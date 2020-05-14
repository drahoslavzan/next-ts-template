import React from 'react';
import { config } from '../config';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-200 py-8">
            <div className="w-full flex flex-col items-center">
                <div>Copyright &copy; {new Date().getFullYear()} {config.app}</div>
                <a className="font-bold" href={`mailto:${config.email}`}>{config.email}</a>
            </div>
        </footer>
    );
}