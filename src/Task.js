import React from "react";
import "tailwindcss/tailwind.css";
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


const Tasks = ({ checkedCount, setCheckedCount }) => {
    return (
        <div className="grid grid-cols-3 gap-x-1 gap-y-1">
            <div className="text-justify text-black text-[22px] font-normal mb-1">
                Stage 1
                <ComponentA checkedCount={checkedCount} setCheckedCount={setCheckedCount} />
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

export default Tasks;
