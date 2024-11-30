import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Header() {
    const [isFloating, setIsFloating] = useState(false);
    const navigate = useNavigate();

    const handleClick = (id) => {
        switch (id) {
          case 'home':
            navigate('/');
            break;
          case 'customer&site':
            navigate('/customer&site');
            break;
          case 'energy-audit':
            navigate('/energy-audit');
            break;
          case 'tasks':
            navigate('/tasks');
            break;
          case 'calendar':
            navigate('/calendar');
            break;
          default:
            console.error('Invalid navigation ID');
        }
      };
      

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;

            // If scrolled down, activate floating header
            if (scrollPosition > 100) {
                setIsFloating(true);
            } else {
                setIsFloating(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="overflow-hidden">
            {/* Static Header at the top */}
            <header className="flex items-center justify-between text-white p-4 shadow-lg bg-gradient-to-r from-white via-[#55a67e] to-[#4CAF50]">
                <img src="images/logo.png" alt="Platform Logo" className="w-50 h-10" />
                {/* Navigation Menu */}
                <nav className="hidden md:flex space-x-8">
                    <ul className="flex space-x-6 font-medium">

                    <li
                    className="hover:text-[#f0f8ff] cursor-pointer transition duration-300"
                    onClick={() => handleClick('home')} // Unique identifier: 'home'
                    >
                    <i className="fas fa-home mr-2"></i>
                    </li>

                    {/* Customer & Site Management */}
                    <li
                    className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300 mt-1"
                    onClick={() => handleClick('customer&site')} // Unique identifier: 'customer&site'
                    >
                    <div className="flex items-center space-x--1">
                        <i className="fas fa-user"></i>
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span className="absolute left-[-1250%] top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover bg-green-500 text-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
                        Customer and Site Management
                    </span>
                    </li>

                    {/* Chart Icon */}
                    <li
                    className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300"
                    onClick={() => handleClick('energy-audit')} // Unique identifier: 'energy-audit'
                    >
                    <i className="fas fa-chart-line"></i>
                    <span className="absolute left-[-2350%] top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover bg-green-500 text-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
                        Energy Audit and Reporting
                    </span>
                    </li>

                    {/* Tasks Icon */}
                    <li
                    className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300"
                    onClick={() => handleClick('tasks')} // Unique identifier: 'tasks'
                    >
                    <i className="fas fa-tasks"></i>
                    <span className="absolute left-[-2600%] top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover bg-green-500 text-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
                        Scope and Baseline Creation
                    </span>
                    </li>

                    {/* Calendar Icon */}
                    <li
                    className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300"
                    onClick={() => handleClick('calendar')} // Unique identifier: 'calendar'
                    >
                    <i className="fas fa-calendar-check"></i>
                    <span className="absolute left-[-3300%] top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover bg-green-500 text-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
                        Calendarization and Analytics
                    </span>
                    </li>


                        {/* Search Icon */}
                        <li className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300">
                             <i class="fas fa-atom"></i>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Floating Header */}
            <div
                className={`fixed top-0 left-0 w-full bg-gradient-to-r from-white via-[#55a67e] to-[#4CAF50] p-1.8 text-white shadow-lg z-50 transition-all duration-1000 ease-out ${
                    isFloating ? 'translate-y-0 opacity-100' : '-translate-y-[100%] opacity-0'
                }`}
            >
                <header className="flex items-center justify-between text-white p-4 shadow-lg bg-gradient-to-r from-white via-[#55a67e] to-[#4CAF50]">
                    <img src="images/logo.png" alt="Platform Logo" className="w-50 h-10" />
                    {/* Navigation Menu */}
                    <nav className="hidden md:flex space-x-8">
                    <ul className="flex space-x-6 font-medium">

                        <li className="hover:text-[#f0f8ff] cursor-pointer transition duration-300">
                            <i className="fas fa-home mr-2"></i>
                        </li>

                        {/* Customer & Site Management */}
                        <li className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300 mt-1"> {/* Added `mt-2` here */}
                            <div className="flex items-center space-x--1">
                                <i className="fas fa-user"></i>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>

                            <span className="absolute left-[-1250%] top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover bg-green-500 text-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
                                Customer and Site Management
                            </span>
                        </li>

                        {/* Chart Icon */}
                        <li className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300">
                            <i className="fas fa-chart-line"></i>
                            <span className="absolute left-[-2350%] top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover bg-green-500 text-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
                                Energy Audit and Reporting
                            </span>
                        </li>

                        {/* Tasks Icon */}
                        <li className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300">
                            <i className="fas fa-tasks"></i>
                            <span className="absolute left-[-2600%] top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover bg-green-500 text-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
                                Scope and Baseline Creation
                            </span>
                        </li>

                        {/* Calendar Icon */}
                        <li className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300">
                            <i className="fas fa-calendar-check"></i>
                            <span className="absolute left-[-3300%] top-1/2 transform -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover bg-green-500 text-white px-3 py-1 rounded-lg shadow-md whitespace-nowrap">
                                Calendarization and Analytics
                            </span>
                        </li>

                        {/* Search Icon */}
                        <li className="relative group hover:text-[#f0f8ff] cursor-pointer transition duration-300">
                            <i className="fas fa-search"></i>
                        </li>
                    </ul>
                </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;
