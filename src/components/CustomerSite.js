import React from 'react';

const CustomerSite = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-white to-green-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white p-6 shadow-xl rounded-r-xl fixed top-[70px] left-0 transition-all duration-1000 ease-in-out" style={{ height: 'calc(100vh - 70px - 150px)' }}>
        <h2 className="text-3xl font-bold mb-6 text-green-600 text-center border-b-2 border-green-500 pb-3">Outline</h2>
        <ul className="space-y-6 text-sm">
          <li className="bg-green-50 p-4 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
            <a href="#add-customer" className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-all duration-300 p-2 rounded-md hover:bg-green-200 text-sm">
              <i className="fas fa-user-plus mr-3 text-green-600"></i>How to Add a Customer
            </a>
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
            <a href="#add-site" className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-all duration-300 p-2 rounded-md hover:bg-green-200 text-sm">
              <i className="fas fa-building mr-3 text-green-600"></i> How to Add a Site
            </a>
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
            <a href="#add-project" className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-all duration-300 p-2 rounded-md hover:bg-green-200 text-sm">
              <i className="fas fa-project-diagram mr-3 text-green-600"></i> How to Add a Project
            </a>
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
            <a href="#additional-notes" className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-all duration-300 p-2 rounded-md hover:bg-green-200 text-sm">
              <i className="fas fa-sticky-note mr-3 text-green-600"></i> Additional Notes
            </a>
          </li>
        </ul>
      </div>

     
      {/* Main Content */}
      <div className="w-4/5 p-8 ml-auto">
        <div className="container mx-auto ml-8 max-w-4xl bg-white rounded-xl shadow-2xl p-6">
          <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-teal-800 to-teal-400 text-transparent bg-clip-text mb-10 tracking-wide leading-tight">
            Customer and Site Management
          </h1>

          {/* Introduction Section */}
          <section className="mb-8">
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              Customer and Site Management is an essential part of organizing your business operations. By efficiently adding and managing customers and their associated sites, you can ensure proper tracking and management of your organization's data.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              The following guide will walk you through the process of adding new customers and sites to your system. Use the links below to jump to the specific sections:
            </p>
            <ul className="list-inside list-disc pl-8 space-y-2 mb-6">
              <li>
                <a href="#add-customer" className="text-green-600 font-semibold hover:text-green-800 transition-all duration-300">
                  How to Add a Customer
                </a>
              </li>
              <li>
                <a href="#add-site" className="text-green-600 font-semibold hover:text-green-800 transition-all duration-300">
                  How to Add a Site
                </a>
              </li>
              <li>
                <a href="#add-project" className="text-green-600 font-semibold hover:text-green-800 transition-all duration-300">
                  How to Add a Project
                </a>
              </li>
            </ul>
          </section>

          {/* Adding a New Customer */}
          <section id="add-customer" className="mb-12 animate__animated animate__fadeIn">
            <h2 className="text-3xl font-bold mb-6 text-gradient-to-r from-green-600 via-pink-400 to-green-600">
              To add a new CUSTOMER, follow these steps:
            </h2>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              Adding a new customer to your system is easy. Follow the steps below to ensure proper entry of customer details:
            </p>
            <ol className="list-decimal pl-8 space-y-4 text-gray-800">
              <li>
                <span className="font-semibold">Step 1:</span> In the top navigation bar, click on your organization’s name.
                <br />
                <span className="text-sm text-gray-500">(For example, if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</span>
              </li>
              <img src="images/Addcustomer.png" alt="Add Customer" className="w-full h-auto my-6 rounded-lg shadow-lg" />
              <li>
                <span className="font-semibold">Step 2:</span> Click the <span className="font-bold text-green-600">Add</span> button to initiate the process.
              </li>
              <li>
                <span className="font-semibold">Step 3:</span> In the Add Customer pop-up window:
                <ul className="list-inside list-circle space-y-2 ml-6">
                  <li>Enter the required customer information such as name, contact details, etc.</li>
                  <li>You can also add additional customer-specific details if applicable.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Step 4:</span> Click the <span className="font-bold text-green-600">Save</span> button to complete the process and save the customer information.
              </li>
            </ol>
            <p className="mt-4 text-gray-600">
              After saving, the new customer will appear in your customer list, and you can proceed to assign sites or other details as needed.
            </p>
          </section>

          {/* Adding a New Site */}
          <section id="add-site" className="mb-12 animate__animated animate__fadeIn">
            <h2 className="text-3xl font-bold mb-6 text-gradient-to-r from-green-600 via-pink-400 to-green-600">
              To add a new SITE, follow these steps:
            </h2>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              Adding a site for a customer is a straightforward process. Here are the detailed steps to follow:
            </p>
            <ol className="list-decimal pl-8 space-y-4 text-gray-800">
              <li>
                <span className="font-semibold">Step 1:</span> In the top navigation bar, click on your organization’s name.
                <br />
                <span className="text-sm text-gray-500">(For example, if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</span>
              </li>
              <img src="images/addsite.png" alt="Add Site" className="w-full h-auto my-6 rounded-lg shadow-lg" />
              <li>
                <span className="font-semibold">Step 2:</span> Select the customer for whom the site needs to be added.
              </li>
              <li>
                <span className="font-semibold">Step 3:</span> In the top navigation bar, click the <i className="fas fa-cogs text-gray-600"></i> settings gear icon.
              </li>
              <li>
                <span className="font-semibold">Step 4:</span> From the settings menu, click <span className="font-bold text-green-600">Site Management</span>.
              </li>
              <li>
                <span className="font-semibold">Step 5:</span> Click the <span className="font-bold text-green-600">Plus (+)</span> button to add a new site.
              </li>
              <li>
                <span className="font-semibold">Step 6:</span> Enter the required site details such as location, size, and other relevant info.
              </li>
              <li>
                <span className="font-semibold">Step 7:</span> Click <span className="font-bold text-green-600">Save</span> to finalize and add the site.
              </li>
            </ol>
            <p className="mt-4 text-gray-600">
              The site will now be added to the customer's profile, and you can proceed to manage additional details.
            </p>
          </section>

          {/* Adding a New Project */}
          <section id="add-project" className="mb-12 animate__animated animate__fadeIn">
  <h2 className="text-3xl font-bold mb-6 text-gradient-to-r from-green-600 via-pink-400 to-green-600">
    To add a new PROJECT, follow these steps:
  </h2>
  <p className="text-lg text-gray-800 mb-4 leading-relaxed">
    Adding a project is a simple and important task to keep track of your organization's ongoing work. Follow the steps below to add a project to the system:
  </p>
  <ol className="list-decimal pl-8 space-y-4 text-gray-800">
    <li>
      <span className="font-semibold">Step 1:</span> In the "Customer Site Management" section, select the site where the project will be added.
    </li>
    <img src="/public/images/" alt="Select Site" className="my-4" />

    <li>
      <span className="font-semibold">Step 2:</span> Click on the <i className="fas fa-project-diagram text-green-600"></i> Projects tab.
    </li>
    <img src="images/projects_tab.png" alt="Projects Tab" className="my-4" />

    <li>
      <span className="font-semibold">Step 3:</span> Click the <span className="font-bold text-green-600">Add Project</span> button.
    </li>
    <img src="images/add_project_button.png" alt="Add Project Button" className="my-4" />

    <li>
      <span className="font-semibold">Step 4:</span> Enter project details such as name, start date, status, and any other relevant info.
    </li>
    <img src="images/project_details_form.png" alt="Project Details Form" className="my-4" />

    <li>
      <span className="font-semibold">Step 5:</span> Click <span className="font-bold text-green-600">Save</span> to complete the process and add the project.
    </li>
    <img src="images/save_button.png" alt="Save Button" className="my-4" />
  </ol>
  <p className="mt-4 text-gray-600">
    The project will now be listed under the selected site, and you can proceed with any additional project-specific management tasks.
  </p>
</section>


          {/* Additional Notes */}
          <section id="additional-notes" className="animate__animated animate__fadeIn">
            <h2 className="text-3xl font-bold mb-6 text-gradient-to-r from-green-600 via-pink-400 to-green-600">
              Additional Notes:
            </h2>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              Remember to regularly update your records to keep your site and project data up-to-date. This will allow better tracking and management of your business activities.
            </p>
            <ul className="list-disc pl-8 text-gray-800">
              <li>Always ensure the accuracy of the data being entered.</li>
              <li>Consult your supervisor for any additional project-specific instructions or custom requirements.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CustomerSite;
