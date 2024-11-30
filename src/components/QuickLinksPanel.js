import React from 'react';

function QuickLinksPanel() {
    return (
        <section className="quick-links-panel py-12 px-8 bg-white text-center">
            {/* Section Title */}
            <h2 className="text-3xl font-bold mb-8 text-[#6CD4A1]">Quick Links</h2>
            
            {/* Links Container */}
            <div className="links grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="link-card bg-[#6CD4A1] text-white py-6 px-4 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl duration-300">
                    Add a Customer
                </div>
                <div className="link-card bg-[#6CD4A1] text-white py-6 px-4 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl duration-300">
                    Start an Energy Audit
                </div>
                <div className="link-card bg-[#6CD4A1] text-white py-6 px-4 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl duration-300">
                    Upload Utility Data
                </div>
            </div>
        </section>
    );
}

export default QuickLinksPanel;
