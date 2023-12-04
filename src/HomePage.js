import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import config from './config.json'; // Adjust the import path as needed

const HomePage = () => {
    const [selectedEnvironment, setSelectedEnvironment] = useState('');
    const [selectedDataCenter, setSelectedDataCenter] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleEnvironmentChange = (event) => {
        setSelectedEnvironment(event.target.value);
        setSelectedDataCenter(''); // Reset data center when environment changes
    };

    const handleDataCenterChange = (event) => {
        setSelectedDataCenter(event.target.value);
    };

    const navigateToChecklist = () => {
        // Navigate to the checklist page with selected environment and data center
        navigate(`/checklist/${selectedEnvironment}/${selectedDataCenter}`);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="environment" className="block text-sm font-medium text-gray-700">Environment</label>
                <select id="environment" value={selectedEnvironment} onChange={handleEnvironmentChange} className="mt-1 block w-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">Select Environment</option>
                    {config.environments.map((env) => (
                        <option key={env.name} value={env.name}>{env.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="dataCenter" className="block text-sm font-medium text-gray-700">Data Center</label>
                <select id="dataCenter" value={selectedDataCenter} onChange={handleDataCenterChange} disabled={!selectedEnvironment} className="mt-1 block w-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">Select Data Center</option>
                    {selectedEnvironment && config.environments.find((env) => env.name === selectedEnvironment)?.dataCenters.map((dc) => (
                        <option key={dc.name} value={dc.name}>{dc.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={navigateToChecklist} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Go to Checklist
            </button>
        </div>
    );
};

export default HomePage;
