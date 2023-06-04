import React from 'react';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-neutral-content mt-28 py-28">
                <div>
                    <span className="footer-title text-xl">Services</span>
                    <a className="link link-hover text-lg">Branding</a>
                    <a className="link link-hover text-lg">Design</a>
                    <a className="link link-hover text-lg">Marketing</a>
                    <a className="link link-hover text-lg">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-xl">Company</span>
                    <a className="link link-hover text-lg">Lamborghini</a>
                    <a className="link link-hover text-lg">Aston Martin</a>
                    <a className="link link-hover text-lg">Rolls-Royce</a>
                    <a className="link link-hover text-lg">Alfa Romeo</a>
                </div>
                <div>
                    <span className="footer-title text-lg">Legal</span>
                    <a className="link link-hover text-lg">Terms of use</a>
                    <a className="link link-hover text-lg">Privacy policy</a>
                    <a className="link link-hover text-lg">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;