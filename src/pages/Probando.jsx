import React, { useState } from 'react';

export const Probando = () => {
  const [changeValue, setChangevalue] = useState(false)

  const cambiarValor = ()=>{
    return setChangevalue(!changeValue)
  }

  console.log(changeValue)
  return(
    <div className="divide-y divide-gray-800 bg-red-500">
    <div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-gray-800 divide-x border-gray-800 ">
            <div className="flex flex-col justify-center ">
                    <div className="flex justify-center md:justify-start items-center m-5 ">
                            <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                            <FaPython  className="w-10 h-10 text-indigo-500"/>
                        </div>
                        <p className="text-white text-2xl font-semibold italic ml-3">Back-end</p>
                    </div>

                <div className="bg-blue-500  flex justify-center">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 justify-center bg-green-500">
                    <div className="w-28 h-28 bg-red-500 rounded-full ">
                        
                    </div>

                    <div className="w-28 h-28 bg-red-500 rounded-full ">
                        
                    </div>
                </div>
                </div>
                </div>

                <div className="flex flex-col justify-center ">
                    <div className="flex justify-center md:justify-start items-center m-5 ">
                            <div className="rounded-full w-14 h-14 bg-transparent border-4 border-indigo-500 flex justify-center items-center">
                            <LuBrainCircuit className="w-10 h-10 text-indigo-500"/>
                        </div>
                        <p className="text-white text-2xl font-semibold italic ml-3">{currentIdiom === 'es' ? 'Conocimiento':'Knowledge'}</p>
                    </div>
                </div>
        </div>
    </div>
  )
};




