import React from "react";

const EnergyAudit = () => {
  return (
    <div
      className="flex min-h-screen bg-gradient-to-r from-white to-green-100"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(108, 212, 161, 0.7)), url('/images/Pagesbg.webp')",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar */}
      <div
        className="w-1/5 bg-white p-6 shadow-xl rounded-r-xl fixed top-[70px] left-0 transition-all duration-1000 ease-in-out"
        style={{ height: "calc(100vh - 70px - 150px)" }}
      >
        <h2 className="text-3xl font-bold mb-6 text-green-600 text-center border-b-2 border-green-500 pb-3">
          Outline
        </h2>
        <ul className="space-y-6 text-sm">
          <li className="bg-green-50 p-4 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
            <a
              href="#energy-audit"
              className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-all duration-300 p-2 rounded-md hover:bg-green-200"
            >
              <i className="fas fa-file-alt mr-3 text-green-600"></i> Energy
              Audit Overview
            </a>
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
            <a
              href="#audit-process"
              className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-all duration-300 p-2 rounded-md hover:bg-green-200"
            >
              <i className="fas fa-tasks mr-3 text-green-600"></i> Audit
              Process Steps
            </a>
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
            <a
              href="#reporting"
              className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-all duration-300 p-2 rounded-md hover:bg-green-200"
            >
              <i className="fas fa-chart-line mr-3 text-green-600"></i>{" "}
              Reporting Guidelines
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 ml-[20%] p-8">
        <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-2xl p-6">
          <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-teal-800 to-teal-400 text-transparent bg-clip-text mb-10 tracking-wide leading-tight">
            Energy Audit and Reporting
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Energy audits are critical in identifying opportunities to improve energy efficiency, reduce operational costs, and minimize environmental impact. This guide will walk you through the key concepts, processes, and guidelines to conduct an energy audit effectively. Whether you are a consultant, engineer, or stakeholder, understanding this process is vital for sustainable energy management.
          </p>

          {/* Energy Audit Overview */}
          <section id="energy-audit" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 via-pink-400 to-green-600 text-transparent bg-clip-text">
              Energy Audit Overview
            </h2>
            <h2 className="text-2xl font-bold mt-8 mb-4">To add a new PROJECT, you can do the following:</h2>
            <ol className="list-decimal pl-8 space-y-2">
              <li>In the top navigation bar, click on your organization’s name.</li>
              <img src="images/addsite.png" alt="" />
              <li>Select the customer for whom the audit needs to be done.</li>
              <li>
                Add a Site in site management for whom the audit needs to be conducted.
                <ul className="list-inside list-circle space-y-2">
                  <li>Follow the "How to Add a Site" steps for guidance.</li>
                </ul>
              </li>
              <li>Click on the Hartree logo in the nav bar to return to the home page.</li>
              <li>Click Remote Assessment from the product list.</li>
              <li>Click the Plus (+) button to add a new Project.</li>
              <li>
                In the Add Project pop-up window:
                <ul className="list-inside list-circle space-y-2">
                  <li>Enter the required project information.</li>
                  <li>The ‘project owner’ name is mandatory.</li>
                </ul>
              </li>
              <li>Click Save to complete the process.</li>
            </ol>
            <p className="mt-4 text-gray-700">
              Adding a new project ensures proper tracking and management of all audit-related tasks. It enables better collaboration and streamlines workflow within your organization.
            </p>
          </section>

          {/* Audit Process Steps */}
          <section id="audit-process" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 via-pink-400 to-green-600 text-transparent bg-clip-text">
              Audit Process Steps
            </h2>
            <h2 className="text-2xl font-bold mb-4">To do an Audit, you can do the following:</h2>
            <ol className="list-decimal pl-8 space-y-2">
              <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
              <img src="images/addsite.png" alt="" />
              <li>Select the customer for whom the audit needs to be done.</li>
              <li>Add a site in site management for whom the audit needs to be conducted.
                <ul className="list-inside list-circle space-y-2">
                  <li>Follow the "How to Add a Site" steps for guidance.</li>
                </ul>
              </li>
              <li>Click on the Hartree logo in the nav bar to return to the home page.</li>
              <li>Click Remote Assessment from the product list.</li>
              <li>Add a Project.
                <ul className="list-inside list-circle space-y-2">
                  <li>Follow the "How to Add a Project" steps for guidance.</li>
                </ul>
              </li>
              <li>Click on the newly added project.</li>
              <li>Attach the site to be audited.
                <ul className="list-inside list-circle space-y-2">
                  <li>a. In the left navigation bar, click on the “newly added project name” to attach the sites that need to be audited to the project.</li>
                </ul>
              </li>
              <img src="images/4img1.png" alt="" className="mx-auto" />
              <li>Select the Site that needs to be audited.</li>
              <li>To add a location under a Site:
                <ul className="list-inside list-circle space-y-2">
                  <li>Click on the site in the left Nav bar.</li>
                  <li>Click on the hamburger button (three horizontal lines) next to the site to add a location (e.g., a building).</li>
                </ul>
              </li>
              <li>To add an equipment/system under a location:
                <ul className="list-inside list-circle space-y-2">
                  <li>a. Click on the newly added location in the left navigation bar.</li>
                  <li>b. Click the hamburger button next to the location to add equipment/system (e.g., cooling, heating).</li>
                  <li>c. Repeat the process to add more systems relevant to the site.</li>
                </ul>
              </li>
              <img src="images/4img2.png" alt="" className="mx-auto" />
              <li>Select the added location or equipment/system and click the Audit button to start the audit.
                <ul className="list-inside list-circle space-y-2">
                  <li>Enter the required project information.</li>
                  <li>Click SAVE to complete the process.</li>
                </ul>
              </li>
              <img src="images/4img3.png" alt="" className="mx-auto" />
              <li>Recommendations are automatically generated.</li>
              <li>Photos, Notes, and Files can be attached to an audit.</li>
            </ol>
            <p className="mt-4 text-gray-700">
              Following these steps ensures that every detail of the audit is well-documented and accessible, allowing for effective analysis and reporting.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EnergyAudit;
