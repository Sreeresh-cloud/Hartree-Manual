import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';

function HeroSection() {
    // List of card details
    const cardDetails = [
        { id: 1, title: 'Add a CUSTOMER', logo: '/images/ADDCust.png' },
        { id: 2, title: 'Add a SITE', logo: '/images/Site.png' },
        { id: 3, title: 'Add a Project in Remote Assessment', logo: '/images/Project.png' },
        { id: 4, title: 'ASHRAE Energy Audit', logo: '/images/Audit.png' },
        { id: 5, title: 'ASHRAE Energy Audit Report', logo: '/images/Report.png' },
        { id: 6, title: 'Add Groups in Energy Management', logo: '/images/Groups.png' },
        { id: 7, title: 'Upload Utility Data Using Excel', logo: '/images/Upload.png' },
        { id: 8, title: 'Add Scope 1 and 2 emissions reduction goals', logo: '/images/Scope.png' },
        { id: 9, title: 'Create Baselines', logo: '/images/images.png' },
        { id: 10, title: 'Calendarize Data & Baselines', logo: '/images/calendar.png' },
    ];
    

    // State for dialog visibility and card content
    const [visible, setVisible] = useState(false);
    const [dialogContent, setDialogContent] = useState('');

    

    // Function to open the dialog with specific content
    const openDialog = (id) => {
        let content = '';
        if (id === 1) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mb-4">To add a new CUSTOMER, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
                        <img src="images/Addcustomer.png" alt=""  />                        
                        <li>Click Add.</li>
                        <li>In the Add Customer pop-up window:</li>
                        <ul className="list-inside list-circle space-y-2">
                            <li>Enter the required customer information.</li>
                        </ul>
                        <li>Click Save to complete the process.</li>
                    </ol>
                </div>
            )
            
        } else if (id === 2) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mb-4">To add a new SITE, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
                        <img src="images/addsite.png" alt=""  />                        
                        <li>Select the customer for whom the site needs to be added.</li>
                        <li>In the top navigation bar, click the settings gear icon.</li>
                        <li>From the settings menu, click Site Management.</li>
                        <li>Click the Plus (+) button to add a new site.</li>
                        <li>In the Add Site pop-up window:
                            <ul className="list-inside list-circle space-y-2">
                                <li>Enter the required site information.</li>
                            </ul>
                        </li>
                        <li>Click Save to complete the process.</li>
                    </ol>
                </div>
            );
        } else if (id === 3) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mt-8 mb-4">To add a new PROJECT, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
                        <img src="images/addsite.png" alt=""  />                        
                        <li>Select the customer for whom the audit needs to be done.</li>
                        <li>Add a Site in site management for whom the audit needs to be conducted.
                            <ul className="list-inside list-circle space-y-2">
                                <li>Follow the "How to Add a Site" steps for guidance.</li>
                            </ul>
                        </li>
                        <li>Click on the Hartree logo in the nav bar to return to the home page.</li>
                        <li>Click Remote Assessment from the product list.</li>
                        <li>Click the Plus (+) button to add a new Project.</li>
                        <li>In the Add Project pop-up window:
                            <ul className="list-inside list-circle space-y-2">
                                <li>Enter the required project information.</li>
                                <li>The ‘project owner’ name is mandatory.</li>
                            </ul>
                        </li>
                        <li>Click Save to complete the process.</li>
                    </ol>
                </div>
            );
        }else if (id === 4) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mb-4">To do an Audit, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
                        <img src="images/addsite.png" alt=""  />                        
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
                </div>
            );
        } else if (id === 5) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mb-4">To create an ASHRAE Energy Audit Report, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>Complete an Audit
                            <ul className="list-inside list-circle space-y-2">
                                <li>Follow the "How to do an ASHRAE Energy Audit" steps for guidance.</li>
                            </ul>
                        </li>
                        <li>Click on the Report tab in the nav bar.</li>
                        <img src="images/5img1.png" alt="" className="mx-auto" />
                        <li>Click the Plus (+) button to create a new report.</li>
                        <li>To create an energy report:
                            <ul className="list-inside list-circle space-y-2">
                                <li>Select the template (ASHRAE Level 1 or Level 2) from the dropdown.</li>
                                <li>Select the site for which the report needs to be created.</li>
                                <li>Select the month/year for which the report needs to be created (Utility analysis will be done for the last 12 months ending on the month selected).</li>
                                <li>Keep or edit the ‘report title’ as required. This is the name that will be shown on the report cover page.</li>
                                <li>Select the report category – ASHRAE.</li>
                                <li>Select the checkbox in the relevant section to add that content to the report. (Utility types like Elec, water, gas, etc. should be selected for utility analysis of the corresponding utility. Systems in the audit summary should be selected to add system summary and recommendations to the report).</li>
                            </ul>
                        </li>
                        <li>Click SAVE to complete the process.</li>
                        <li>Click the download button to download the Word report.</li>
                        <img src="images/5img2.png" alt="" className="mx-auto" />

                    </ol>
                </div>
            );
        }        else if (id === 6) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mb-4">To add Energy Management, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
                        <img src="images/addsite.png" alt=""  />                        
                        <li>Select the customer for whom the Group needs to be added.</li>
                        <li>Add a Site in site management for the customer
                            <ul className="list-inside list-circle space-y-2">
                                <li>Follow the "How to Add a Site" steps for guidance.</li>
                            </ul>
                        </li>
                        <li>Click on the Hartree logo in the nav bar to return to the home page.</li>
                        <li>Click Energy Management from the product list.</li>
                        <li>Click the Add Group (+) button to create a new group.</li>
                        <li>In the Add group pop-up window:
                            <ul className="list-inside list-circle space-y-2">
                                <li>Enter the required group information.</li>
                            </ul>
                        </li>
                        <li>Click Save to complete the process.</li>
                        <li>Attach a Site to the group.
                            <ul className="list-inside list-circle space-y-2">
                                <li>Click on the “newly added group” in the left navigation bar to attach the sites.</li>
                                <li>Right-click on the newly added group to add sites under a group.</li>
                                <li>Click the Add (+) button to attach the selected sites to the group.</li>
                            </ul>
                        </li>
                    </ol>
                    <p className="mt-4">Grouping can be done by country/region or by type.</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>Example Region: USA, Canada, Mexico, etc.</li>
                        <li>Example Type: Office, Hospital, retail, etc.</li>
                        <li>Example Type: Cookie, chocolate, brewery, etc.</li>
                    </ul>
                </div>
            );
        }  else if (id === 7) {
            content = (
                <div>
                     <h2 className="text-2xl font-bold mt-6 mb-4">To upload utility data, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
                        <img src="images/addsite.png" alt=""  />                        
                        <li>Select the customer for whom the Group needs to be added.</li>
                        <li>Add a Site in site management for the customer
                            <ul className="list-inside list-circle space-y-2">
                                <li>Follow the "How to Add a Site" steps for guidance.</li>
                            </ul>
                        </li>
                        <li>Click on the Hartree logo in the nav bar to return to the home page.</li>
                        <li>Click Energy Management from the product list.</li>
                        <li>Add a Group in Energy management
                            <ul className="list-inside list-circle space-y-2">
                                <li>Follow the "How to Add a Group" steps for guidance.</li>
                            </ul>
                        </li>
                        <li>Attach a Site to the group.
                            <ul className="list-inside list-circle space-y-2">
                                <li>Click on the “newly added group” in the left navigation bar to attach the sites.</li>
                                <li>Right-click on the newly added group to add sites under a group.</li>
                                <li>Click the Add (+) button to attach the selected sites to the group.</li>
                            </ul>
                        </li>
                        <li>Click the Connect/Upload button to upload utility data.
                            <ul className="list-inside list-circle space-y-2">
                                <li>In the file upload tab, click the Choose file button to select the Excel file to upload.</li>
                                <li>Click on the file name to upload the data.</li>
                            </ul>
                        </li>
                        <img src="images/7img1.png" alt="" className="mx-auto" />

                    </ol>
                    <p className="mt-4">Note:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>Ignore: will only add new timestamp data (if available), and the existing data will not be changed.</li>
                        <li>Replace: will add a new timestamp (if available) and replace all the old timestamps if repeating.</li>
                    </ul>
                </div>
            );
        }else if (id === 8) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mb-4">To add Scope 1 and 2 emissions reduction goals in Energy Management, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
                        <img src="images/addsite.png" alt=""  />                        
                        <li>Select the customer for whom the goals need to be added.</li>
                        <li>Click on the Hartree logo in the nav bar to return to the home page.</li>
                        <li>Click Energy Management from the product list.</li>
                        <li>Click the Portfolio Tab button to add a new Project.</li>
                        <li>In the Edit Target year pop-up window:
                            <ul className="list-inside list-circle space-y-2">
                                <li>Enter the required goals information.</li>
                            </ul>
                        </li>
                        <li>Click Save to complete the process.</li>
                        <img src="images/8img1.png" alt="" className="mx-auto" />

                    </ol>
                </div>
            );
        }else if (id === 9) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mb-4">To add a Baseline in Energy Management, you can do the following:</h2>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the top navigation bar, click on your organization’s name (e.g., if your company is named “ABC Consultant,” you will see "ABC Consultant" displayed instead of “Your Org Name”).</li>
                        <img src="images/addsite.png" alt=""  />                        
                        <li>Select the customer for whom the goals need to be added.</li>
                        <li>Click on the Hartree logo in the nav bar to return to the home page.</li>
                        <li>Click Energy Management from the product list.</li>
                        <li>Select the Site from the left nav bar.</li>
                        <li>Select the Utility from the top nav bar.</li>
                        <img src="images/9img1.png" alt="" className="mx-auto" />

                        <li>To add a Baseline:
                            <ul className="list-inside list-circle space-y-2">
                                <li>Scroll down to the Actual Consumption vs baseline section.</li>
                                <li>Click the Edit button to complete the process.</li>
                                <li>The baseline management will be opened by clicking the edit button.</li>
                            </ul>
                        </li>
                        <li>In the Baseline Management window:
                            <ul className="list-inside list-circle space-y-2">
                                <li>Click the Plus (+) button to add a new baseline.</li>
                                <li>In the Add baseline pop-up window:
                                    <ul className="list-inside list-circle space-y-2">
                                        <li>Enter the required baseline information.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Click Update and then Run to complete the process.</li>
                        <img src="images/9img3.png" alt="" className="mx-auto" />

                        <li>Note: Click the Expand button to see the model information (ANOVA table & other statistical parameters of the model).</li>
                    </ol>
                </div>
            );
        }else if (id === 10) {
            content = (
                <div>
                    <h2 className="text-2xl font-bold mb-4">To add a Calendarized Data & Baseline, you can do the following:</h2>
                    <p>Calendarization is applied when production or occupancy data is available only on a monthly basis, but utility data is recorded for non-calendarized time periods. This process aligns the utility data with calendar months for more accurate comparison and analysis.</p>
                    <ol className="list-decimal pl-8 space-y-2">
                        <li>In the Baseline Management window: Follow the steps in the "How to Create Baselines" section for guidance.
                            <ul className="list-inside list-circle space-y-2">
                                <li>Click the Plus (+) button to add a new baseline.</li>
                                <li>In the Add baseline pop-up window:
                                    <ul className="list-inside list-circle space-y-2">
                                        <li>Enter the required baseline information.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>In the Add baseline pop-up window:
                            <ul className="list-inside list-circle space-y-2">
                                <li>Change Calendarized [Yes/No] button to Yes.</li>
                                <li>Note: The default is always not to calendarize.</li>
                            </ul>
                        </li>
                        <li>Click Update and then Run to complete the process.</li>
                        <img src="images/10img.png" alt="" className="mx-auto" />
                        <li>Note: Click the Expand button to see the model information (ANOVA table & other statistical parameters of the model).</li>
                    </ol>
                </div>
            );
        }else {
            content = <p className="text-lg">Content  will go here...</p>;
        }

        setDialogContent(content);
        setVisible(true); // Show the dialog
    };

    // Function to close the dialog
    const closeDialog = () => {
        setVisible(false);
    };

    return (
        <section className="hero-section text-white py-20 px-8 bg-[url('/src/assets/bg-log.png')] bg-cover bg-center">
            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {cardDetails.slice(0, 8).map((card) => (
        <div
            key={card.id}
            className="card bg-white text-[#6CD4A1] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openDialog(card.id)} // Open dialog on click
        >
            {/* Logo Image */}
            <div className="logo-container bg-[#e8faf3] w-20 h-20 flex items-center justify-center rounded-full">
                <img 
                    src={card.logo} // Dynamic image path
                    alt={`${card.title} Logo`} 
                    className="w-16 h-16 object-contain" 
                />
            </div>
            {/* Card Title */}
            <h3 className="text-xl font-semibold text-center">{card.title}</h3>
        </div>
    ))}
</div>

{/* Centering the last row with the last 2 cards */}
<div className="flex justify-center mt-8 card-container">
    <div className="grid grid-cols-2 gap-8">
        {cardDetails.slice(8).map((card) => (
            <div
                key={card.id}
                className="card bg-white text-[#6CD4A1] p-6 w-94 rounded-lg shadow-lg flex flex-col items-center space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openDialog(card.id)} // Open dialog on click
            >
                {/* Logo Image */}
                <div className="logo-container bg-[#e8faf3] w-20 h-20 flex items-center justify-center rounded-full">
                    <img 
                        src={card.logo} // Dynamic image path
                        alt={`${card.title} Logo`} 
                        className="w-16 h-16 object-contain" 
                    />
                </div>
                {/* Card Title */}
                <h3 className="text-xl font-semibold text-center">{card.title}</h3>
            </div>
        ))}
    </div>
</div>



            {/* PrimeReact Dialog with custom class for animation */}
            <Dialog
                header="How to Add a Customer"
                visible={visible}
                onHide={closeDialog}
                style={{ width: '50vw', borderRadius: '15px' }}  // Add border-radius here
                className="custom-dialog" // Custom class for any additional styling
            >
                <div className="p-4">{dialogContent}</div>
               
            </Dialog>

        </section>
    );
}

export default HeroSection;
