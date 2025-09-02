import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import QuestionCard from "./QuestionCard";

export const Completion = () => {
    const [status, setStatus] = useState<string>("");
    const [metaSurveyDone, setMetaSurveyDone] = useState<boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.currentTarget;
        const formData = new FormData(form);
    
        // Convert FormData → plain object
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        
            
        console.log(data)
    
        try {
            await addDoc(collection(db, "submissions"), {
            ...data,
            name: window.sessionStorage.getItem("name"),
            email: window.sessionStorage.getItem("email"),
            videoId: "meta-survey",
            createdAt: new Date(),
            password: window.sessionStorage.getItem("password"), 
            });
    
            setMetaSurveyDone(true);

            form.reset();
        } catch (err) {
            console.log(err)
            setStatus("❌ Failed to submit results.");
            console.log(status)
        }
    };

    return <div>
        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-5 text-left">
            <p className="text-normal font-bold mb-1">Survey Completed</ p> 
            {
                !metaSurveyDone ?
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <QuestionCard 
                        name={"Survey-clarity"}
                        title={"Survey clarity"} 
                        description={"How clear and easy to understand were the questions in this survey?"}
                        requireExplanation={false}
                        labels={{
                            1: "Completely unclear",
                            2: "Very unclear",
                            3: "Somewhat clear",
                            4: "Very clear",
                            5: "Perfectly clear"
                        }}
                    />
                    <QuestionCard 
                        name={"Survey-length"}
                        title={"Survey length"} 
                        description={"How did you feel about the length of this survey?"}
                        requireExplanation={false}
                        labels={{
                            1: "Unjustifiably long",
                            2: "Very long",
                            3: "Just right",
                            4: "Vert short",
                            5: "Too short"
                        }}
                    />

                    <div className="flex flex-col">
                        <button
                        type="submit"
                        className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700"
                        >
                        Submit
                        </button>
                    </div>

                </form> :
                <p className="text-normal mb-1">Thank you for your feedback.</ p> 
            }
        </div>
        

          <br />
    </div>
}