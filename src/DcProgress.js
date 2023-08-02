import React from "react";
import './styles.css';

const DcProgress = ({ checkedCount }) => {
    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6 sm:w-1/4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-green-500 border-0 bg-clip-border rounded-2xl mb-5 draggable">
                        <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                            <div className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/normal text-dark">
                                <span className="text-white text-5xl/none font-semibold mr-2 tracking-[-0.115rem]">{checkedCount}</span>
                                <span className="pt-1 font-medium text-white/80 text-lg/normal">Completed Tasks</span>
                            </div>
                        </div>
                        <div className="flex items-end flex-auto py-8 pt-0 px-9 ">
                            <div className="flex flex-col items-center w-full mt-3">
                                <div className="flex justify-between w-1/2 mx-auto mt-auto mb-2 font-semibold text-white/80 text-lg/normal">
                                    <span className="mr-4">12 Pending</span>
                                    <span>65%</span>
                                </div>
                                <div className="mx-3 rounded-2xl h-[8px] w-1/2 mx-auto bg-white/20">
                                    <div className="rounded-2xl bg-white w-[85%] h-[8px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default DcProgress