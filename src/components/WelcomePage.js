import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const WelcomePage = () => {

    const navigate = useNavigate(); // Initialize navigate function

    const handleExploreClick = () => {
        navigate('/explore'); // Navigate to /home when the button is clicked
    };


    return (
        <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
            {/* Header with Image */}
            <div className="relative text-center space-y-4 py-20 h-screen  bg-gradient-to-b from-gray-300  via-gray-50 to-white ">
                {/* Image with absolute positioning and translation */}
                <img
                    src="/images/Welcomebg.png" // Correct path to the image
                    alt="Welcome Background"
                    className="absolute top-0 left-1/2  w-[90%] h-[90%] object-contain" 
                    style={{ transform: 'translateX(-20rem) translateY(0rem)' }} 
                />
                
               {/* Header Text */}
                    {/* Main Heading */}
                    <h1 className="text-6xl font text-gray-800 leading-tight transform translate-x-[-23rem] translate-y-[15rem]">
                        <div className="text-[#1E7A1E] transform translate-x-[-10rem] font-poppins">Welcome to</div>

                        <div className="text-[#1E7A1E] font-extrabold animate-pulse transform translate-x-[2rem] font-poppins">Hartree's User Guide</div>
                    </h1>

                    {/* Subheading */}
                    <p className="text-2xl text-gray-700 mt-6 font-medium transform translate-x-[-18rem] translate-y-[15rem]">
                        Your Gateway to Simplified <span className="text-[#6CD4A1]">Building Energy Management</span>
                    </p>

                    {/* Explore Button */}
                    <div className="mt-8 left-40 transform translate-x-100 translate-y-60">
                    <button  onClick={handleExploreClick}  className="bg-[#6CD4A1] text-white py-2 px-6 rounded-full flex items-center hover:bg-[#39ff14] hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out transform translate-x-10 translate-y-4">
                        <span className="text-xl font-medium">
                            <i className="fas fa-compass mr-2"></i>
                            Explore
                        </span>
                    </button>


                    </div>
            </div>

            {/* Introduction */}
            <div className="text-center space-y-4 py-20 h-screen bg-[url('/public/images/bg.jpg')] bg-cover bg-center" >
            <section className="max-w-4xl bg-white shadow-lg rounded-lg p-8 mt-10 space-y-6 mx-auto hover:shadow-2xl transform transition-all duration-300 ease-in-out">
              <p className="text-lg font-poppins text-gray-700 leading-relaxed">
                At <span className="font-bold text-[#6CD4A1]">Hartree Research</span>, we offer a cloud-based platform
                designed to <div>streamline <span className="font-semibold">Field Data Collection</span>, enable{' '}
                <span className="font-semibold">Remote Energy Audits</span>,</div> harness{' '}
                <span className="font-semibold">Data Analytics</span>, and optimize{' '}
                <span className="font-semibold">Energy Management</span>.
                <div>This guide will walk you through every feature, ensuring you unlock the full potential of our platform.</div> 
             </p>
            </section>


                {/* Why This Guide */}
                <section className="max-w-4xl mt-12 bg-gradient-to-br from-[#ffffff] to-[#f0f8f3] shadow-lg rounded-lg p-8 space-y-6 mx-auto transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-2xl font-bold text-[#6CD4A1]">Why This Guide?</h2>
                    <ul className="list-disc list-inside space-y-3 text-lg">
                        <li>Step-by-step tutorials for every feature.</li>
                        <li>Real-world use cases to guide your implementation.</li>
                        <li>FAQs and troubleshooting tips to resolve issues quickly.</li>
                    </ul>
                </section>
               </div> 

            {/* Features Section */}
            
            <section className="max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto ">
                {[
                    'Customer and Site Management',
                    'Energy Audit Reporting and Management ',
                    'Scope and Baseline Creation',
                    'Data Calendarization and Analytics',
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card bg-[#ffffff] shadow-lg rounded-lg p-6 space-y-4 text-center transform hover:scale-110 hover:shadow-2xl transition-all duration-300"
                    >
                        <h3 className="text-lg font-semibold text-[#6CD4A1]">{feature}</h3>
                        <p className="text-sm text-gray-600">
                            Explore and utilize this feature to streamline your energy management needs.
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default WelcomePage;
