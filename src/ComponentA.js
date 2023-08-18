import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';



function ComponentA({ checkedCount, setCheckedCount }) {
    const [isCheckedPreCheck, setIsCheckedPreCheck] = useState(false);
    const [isCheckedGitPull, setIsCheckedGitPull] = useState(false);
    const [isCheckedDeployAutomation, setIsCheckedDeployAutomation] = useState(false);
    const [isCheckedDeployAutomationSub, setIsCheckedDeployAutomationSub] = useState(false);
    const [isCheckedVaultSchema, setIsCheckedVaultSchema] = useState(false);
    const [isCheckedXxx, setIsCheckedXxx] = useState(false);
    const [isCheckedMaintenance, setIsCheckedMaintenance] = useState(false);

    const handleCheckChange = (setChecked, prevChecked) => {
        setChecked(!prevChecked);
        setCheckedCount(prevCount => prevChecked ? prevCount - 1 : prevCount + 1);
    };
    const handleInfoClick = (taskName) => {
        alert(`Information about ${taskName}`);
    };

    return (
        <>


            <div className="grid grid-cols-1 gap-0.5">


                <div className="w-[500px] h-[80px] bg-cyan-100 rounded-[10px] flex items-start p-4 space-x-4">
                    <input
                        type="checkbox"
                        checked={isCheckedPreCheck}
                        onChange={() => handleCheckChange(setIsCheckedPreCheck, isCheckedPreCheck)}
                        className="w-[46px] h-[46px] rounded-md border border-black "
                    />

                    <div className="flex-grow">
                        <div className="text-zinc-500 text-xs font-normal tracking-wide">Pre-Check</div>
                        <div className="flex justify-between items-center text-black text-[22px] font-normal mb-1">
                            <span className="flex-grow">Pre-Check</span>
                            <button className="text-blue-200 hover:text-blue-700 transition-colors duration-200" onClick={() => handleInfoClick('Pre-Check')}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[500px] h-[360px] bg-cyan-100 rounded-[10px] flex flex-col p-4 space-y-0">
                    <div className="flex items-start space-x-4">
                        <input
                            type="checkbox"
                            checked={isCheckedDeployAutomation}
                            onChange={(e) => setIsCheckedDeployAutomation(e.target.checked)}
                            className="w-[46px] h-[46px] rounded-md border border-black "
                        />
                        <div className="flex-grow">
                            <div className="text-zinc-500 text-xs font-normal tracking-wide">Deploy_Automation</div>
                            <div className="flex justify-between items-center text-black text-[22px] font-normal mb-1">
                                <span className="flex-grow">Deploy_Automation</span>
                                <button className="text-blue-200 hover:text-blue-700 transition-colors duration-200" onClick={() => handleInfoClick('Deploy_Automation')}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[550px] h-20 relative">
                        <input
                            type="checkbox"
                            checked={isCheckedGitPull}
                            onChange={() => handleCheckChange(setIsCheckedGitPull, isCheckedGitPull)}
                            className="w-[30px] h-[30px] absolute left-0 top-[25px] rounded-md border border-black ml-[50px]"
                        />
                        <div className="w-[346px] h-[30px] left-[90px] top-[25px] absolute text-black text-lg font-normal">Git Pull
                            <button className="ml-2 text-blue-200 hover:text-blue-700 transition-colors duration-200" onClick={() => handleInfoClick('Git Pull')}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </button>
                        </div>
                        <div className="w-px h-5 left-[65px] top-0 absolute bg-neutral-400" />
                    </div>
                    <div className="w-[400px] h-20 relative">
                        <input
                            type="checkbox"
                            checked={isCheckedDeployAutomationSub}
                            onChange={() => handleCheckChange(setIsCheckedDeployAutomationSub, isCheckedDeployAutomationSub)}
                            className="w-[30px] h-[30px] absolute left-0 top-[25px] rounded-md border border-black ml-[50px]"
                        />
                        <div className="w-[346px] h-[30px] left-[90px] top-[25px] absolute text-black text-lg font-normal">Deploy_Automation
                            <button className="ml-2 text-blue-200 hover:text-blue-700 transition-colors duration-200" onClick={() => handleInfoClick('Deploy_Automation')}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </button>
                        </div>
                        <div className="w-px h-5 left-[65px] top-0 absolute bg-neutral-400" />
                    </div>
                    <div className="w-[400px] h-20 relative">
                        <input
                            type="checkbox"
                            checked={isCheckedVaultSchema}
                            onChange={() => handleCheckChange(setIsCheckedVaultSchema, isCheckedVaultSchema)}
                            className="w-[30px] h-[30px] absolute left-0 top-[25px] rounded-md border border-black ml-[50px]"
                        />
                        <div className="w-[346px] h-[30px] left-[90px] top-[25px] absolute text-black text-lg font-normal">Vault Schema Instantiation
                            <button className="ml-2 text-blue-200 hover:text-blue-700 transition-colors duration-200" onClick={() => handleInfoClick('Vault Schema Instantiation')}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </button>
                        </div>
                        <div className="w-px h-5 left-[65px] top-0 absolute bg-neutral-400" />
                    </div>
                    <div className="w-[400px] h-20 relative">
                        <input
                            type="checkbox"
                            checked={isCheckedXxx}
                            onChange={() => handleCheckChange(setIsCheckedXxx, isCheckedXxx)}
                            className="w-[30px] h-[30px] absolute left-0 top-[25px] rounded-md border border-black ml-[50px]"
                        />
                        <div className="w-[346px] h-[30px] left-[90px] top-[25px] absolute text-black text-lg font-normal">xxx
                            <button className="ml-2 text-blue-200 hover:text-blue-700 transition-colors duration-200" onClick={() => handleInfoClick('xxx')}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </button>
                        </div>
                        <div className="w-px h-5 left-[65px] top-0 absolute bg-neutral-400" />
                    </div>
                </div>


                <div className="w-[550px] h-[80px] bg-cyan-100 rounded-[10px] flex items-start p-4 space-x-4">
                    <input
                        type="checkbox"
                        checked={isCheckedMaintenance}
                        onChange={() => handleCheckChange(setIsCheckedMaintenance, isCheckedMaintenance)}
                        className="w-[46px] h-[46px] rounded-md border border-black "
                    />
                    <div>
                        <div className="text-zinc-500 text-xs font-normal tracking-wide">Maintenance</div>
                        <div className="text-black text-[22px] font-normal mb-1">Maintenance
                            <button className="ml-2 text-blue-200 hover:text-blue-700 transition-colors duration-200" onClick={() => handleInfoClick('Maintenance')}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}
export default ComponentA