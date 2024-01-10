    import React from 'react';

    const HomePage = () => {
        let inProgressTasks = [
            { id: 'DC34', title: 'EMEA - DC34 Prod', completed: 16, percentage: Math.round((16 / 45) * 100) },
            { id: 'DC66', title: 'DC66 Prod', completed: 20, percentage: Math.round((20 / 45) * 100) },
            { id: 'DC30', title: 'DC30 Prod', completed: 30, percentage: Math.round((30 / 45) * 100) },
            { id: 'DC52', title: 'DC52 Prod', completed: 25, percentage: Math.round((25 / 45) * 100) },
            { id: 'DC50', title: 'DC50 Prod', completed: 10, percentage: Math.round((10 / 45) * 100) },
            { id: 'DC23', title: 'DC23 Prod', completed: 25, percentage: Math.round((25 / 45) * 100) },
            { id: 'DC22', title: 'DC22 Prod', completed: 35, percentage: Math.round((35 / 45) * 100) },
            { id: 'DC57', title: 'DC57 Prod', completed: 5, percentage: Math.round((5 / 45) * 100) },
            { id: 'DC33', title: 'DC33 Prod', completed: 40, percentage: Math.round((40 / 45) * 100) },
            { id: 'DC55', title: 'DC55 Prod', completed: 5, percentage: Math.round((5 / 45) * 100) },
        ];

        // Sort in-progress tasks in descending order of completion percentage
        inProgressTasks = inProgressTasks.sort((a, b) => b.percentage - a.percentage);

        const completedTasks = [
            { id: 'US-DC68', title: 'US - DC68 Prod', completed: 45, percentage: 100 },
            { id: 'DC68', title: 'DC68 Prod', completed: 45, percentage: 100 },
            { id: 'DC70', title: 'DC70 Prod', completed: 45, percentage: 100 },
            { id: 'DC41', title: 'DC41 Prod', completed: 45, percentage: 100 },
            { id: 'DC47', title: 'DC47 Prod', completed: 45, percentage: 100 },
            { id: 'DC62', title: 'DC62 Prod', completed: 45, percentage: 100 },
        ];

        return (
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold underline text-center text-gray-800 mb-8">Home Page</h1>

                <h2 className="text-xl font-bold text-purple-600 mb-4">In-Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {inProgressTasks.map((task) => (
                        <div key={task.id} className="bg-white rounded-lg shadow p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold">{task.title}</h3>
                                <span className="text-sm font-semibold text-purple-600">{task.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${task.percentage}%` }}></div>
                            </div>
                            <div className="text-sm text-gray-600">{task.completed}/45 Completed</div>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold text-green-600 mt-8 mb-4">Completed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {completedTasks.map((task) => (
                        <div key={task.id} className="bg-white rounded-lg shadow p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-lg font-semibold">{task.title}</h3>
                                <span className="text-sm font-semibold text-green-600">100%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                            <div className="text-sm text-gray-600">45/45 Completed</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default HomePage;
