import React from "react";
import "tailwindcss/tailwind.css";
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


const App = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="text-justify text-black text-[22px] font-normal mb-1">
                Stage 1
                <ComponentA />
            </div>
            <div className="text-center text-justify text-black text-[22px] font-normal mb-1">
                Stage 2
                <ComponentB />
            </div>
            <div className="text-center text-justify text-black text-[22px] font-normal mb-1">
                Stage 3
                <ComponentC />
            </div>
        </div >
    );
};

export default App;
