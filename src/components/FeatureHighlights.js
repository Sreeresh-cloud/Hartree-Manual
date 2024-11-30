import React from 'react';

function FeatureHighlights() {
    return (
        <section className="feature-highlights py-16 px-8 bg-[#6CD4A1] text-white">
            {/* Section Title */}
            <h2 className="text-3xl font-bold mb-12 text-center">Feature Highlights</h2>

            {/* Features Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Individual Feature Cards */}
                <div className="feature bg-white text-[#6CD4A1] p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300">
                    <h3 className="text-2xl font-semibold mb-4">Remote Assessments</h3>
                    <p className="mb-4">Conduct energy assessments from anywhere with remote tools.</p>
                    <a href="#read-more" className="font-medium text-[#6CD4A1] hover:text-[#55a67e] transition">
                        Read More &rarr;
                    </a>
                </div>
                
                <div className="feature bg-white text-[#6CD4A1] p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300">
                    <h3 className="text-2xl font-semibold mb-4">Energy Management</h3>
                    <p className="mb-4">Streamline your energy usage with comprehensive data analysis.</p>
                    <a href="#read-more" className="font-medium text-[#6CD4A1] hover:text-[#55a67e] transition">
                        Read More &rarr;
                    </a>
                </div>
                
                <div className="feature bg-white text-[#6CD4A1] p-6 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl duration-300">
                    <h3 className="text-2xl font-semibold mb-4">Baseline Creation</h3>
                    <p className="mb-4">Create accurate energy baselines for your projects.</p>
                    <a href="#read-more" className="font-medium text-[#6CD4A1] hover:text-[#55a67e] transition">
                        Read More &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FeatureHighlights;
