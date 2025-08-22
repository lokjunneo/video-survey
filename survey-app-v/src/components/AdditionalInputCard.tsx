
import { inputHandleEnter } from "../utils/inputhandler";
import { type FC } from "react";

const AdditionalInput: FC = () => {

    return (
        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-5 text-left">
            <p className="text-normal font-bold mb-1">Any other issues? (optional)</ p>
            <br></br>
            <div className="flex items-center flex-col">
                <input className="w-4/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Noticed an issue with..." name={name +"-comment"}
                onKeyDown={inputHandleEnter}></input>
            </div> 
            
        </div>
    )
}


export default AdditionalInput;
