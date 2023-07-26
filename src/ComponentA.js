function ComponentA() {

    return (
        <>


            <div className="grid grid-cols-1 gap-2">

                <div className="w-[600px] h-[100px] bg-orange-100 rounded-[10px] flex items-start p-4 space-x-4">
                    <div className="w-[46px] h-[46px] rounded-md border border-black" />
                    <div>
                        <div className="text-zinc-500 text-xs font-normal tracking-wide">Pre-Check</div>
                        <div className="text-black text-[22px] font-normal mb-1">Pre-Check</div>
                    </div>
                </div>
                <div className="w-[600px] h-[370px] bg-orange-100 rounded-[10px] flex flex-col p-4 space-y-4">
                    <div className="flex items-start space-x-4">
                        <div className="w-[46px] h-[46px] rounded-md border border-black flex flex-col items-center">
                            <div className="w-px h-5 bg-neutral-400" />
                        </div>
                        <div>
                            <div className="text-zinc-500 text-xs font-normal tracking-wide">
                                Deploy_Automation
                            </div>
                            <div className="text-black text-[22px] font-normal mb-1">
                                Deploy_Automation
                            </div>

                        </div>
                    </div>

                    <div className="w-[400px] h-20 relative">
                        <div className="w-[30px] h-[30px] left-0 top-[25px] absolute">
                            <div className="w-[30px] h-[30px] left-0 top-0 absolute rounded-md border border-green-600" />
                        </div>
                        <div className="w-[346px] h-[30px] left-[54px] top-[25px] absolute text-zinc-600 text-lg font-normal">Git Pull</div>
                        <div className="w-px h-5 left-[15px] top-0 absolute bg-neutral-400" />
                        <div className="w-px h-5 left-[15px] top-[60px] absolute bg-neutral-400" />
                    </div>
                    <div className="w-[400px] h-20 relative">
                        <div className="w-[30px] h-[30px] left-0 top-[25px] absolute">
                            <div className="w-[30px] h-[30px] left-0 top-0 absolute rounded-md border border-green-600" />
                        </div>
                        <div className="w-[346px] h-[30px] left-[54px] top-[25px] absolute text-zinc-600 text-lg font-normal">Deploy_Automation</div>
                        <div className="w-px h-5 left-[15px] top-0 absolute bg-neutral-400" />
                        <div className="w-px h-5 left-[15px] top-[60px] absolute bg-neutral-400" />
                    </div>
                    <div className="w-[400px] h-20 relative">
                        <div className="w-[30px] h-[30px] left-0 top-[25px] absolute">
                            <div className="w-[30px] h-[30px] left-0 top-0 absolute rounded-md border border-green-600" />
                        </div>
                        <div className="w-[346px] h-[30px] left-[54px] top-[25px] absolute text-zinc-600 text-lg font-normal">Vault Schema Instantiation</div>
                        <div className="w-px h-5 left-[15px] top-0 absolute bg-neutral-400" />
                        <div className="w-px h-5 left-[15px] top-[60px] absolute bg-neutral-400" />
                    </div>

                </div>
                <div className="w-[600px] h-[100px] bg-orange-100 rounded-[10px] flex items-start p-4 space-x-4">
                    <div className="w-[46px] h-[46px] rounded-md border border-black" />
                    <div>
                        <div className="text-zinc-500 text-xs font-normal tracking-wide">Pre-Check</div>
                        <div className="text-black text-[22px] font-normal mb-1">Pre-Check</div>
                    </div>
                </div>

            </div>


        </>

    )
}
export default ComponentA