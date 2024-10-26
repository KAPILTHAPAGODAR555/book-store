import React from 'react'
const selectField = ({Label , name, options , register})=>{
    return(
        <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">
                <select 
                {...register(name , {required: true})}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
                    {
                        options.map((option)=>(
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))
                    }
                </select>

               
            </label>
        </div>
    )
}

export default selectField