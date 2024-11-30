import React from 'react';

function Footer() {
    return (
<footer className="py-4 bg-gradient-to-r from-[#6CD4A1] via-[#55a67e] to-[#4CAF50] text-white shadow-[0_-4px_8px_rgba(0,0,0,0.3)]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                {/* Contact */}
                <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                    <p className="text-sm font-semibold text-lg">
                        Contact us: 
                        <a href="mailto:info@hartreeresearch.com" className="font-medium underline hover:text-[#f3f3f3] transition duration-300"> info@hartreeresearch.com</a>
                    </p>
                </div>

                {/* Location */}
                <div className="flex justify-start md:ml-12 space-x-4">
                <p className="text-sm text-lg" style={{ transform: 'translateX(-80px)' }}>
                    Location: <span className="font-semibold">Atlanta, GA, USA</span>
                </p>
                                </div>

                {/* Social Media Links */}
                <div className="flex items-center space-x-8 mt-6 md:mt-0">
                    <a href="#linkedin" className="hover:text-[#f3f3f3] transition duration-300 text-2xl">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-center mt-6 font-light opacity-80">© Hartree | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
