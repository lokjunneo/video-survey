// src/components/SubmissionForm.jsx
import React, { useState, type FC, type HTMLAttributes } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'; // Import your initialized db instance
import QuestionCard from './QuestionCard';
import type { RatingLabelMap } from '@/utils/ratinglabels';
import type { SurveyDataFormat } from '@/utils/surveydataformat';

interface SurveyFormProps extends HTMLAttributes<HTMLDivElement> {  
  vId?: string; // optional, can override default "rating"
  qns?: SurveyDataFormat[]
}

const exampleLabels: RatingLabelMap = {
  1: "Perfectly normal",
  2: "Slightly abnormal",
  3: "Moderately abnormal",
  4: "Abnormal",
  5: "Very abnormal",
};

const SurveyForm: FC<SurveyFormProps> = ({vId = "Example", className="",qns=[]}: SurveyFormProps) => {
    const [status, setStatus] = useState<string>("");
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
          password: window.sessionStorage.getItem("password"), // required by your Firestore rule
          videoId: vId,
          createdAt: new Date(),
        });
  
        setStatus("✅ Submission successful! Moving on...");

        form.reset();
      } catch (err) {
        setStatus("❌ Failed to submit results.");
      }
    };
  
    return (
      <div className={className}>
        
        <div className='w-auto inline-flex flex-col'>
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(e)}}>
          {
            qns.map((qn) => {
              return <div>
              
                <QuestionCard 
                  name={qn.name}
                  title={qn.title} 
                  description={qn.description} 
                  labels={qn.ratinglabels}
                  />

                  <br />
                  
                </div>
            })
          }
          
          <div className="flex flex-col">
            <button
              type="submit"
              className="g-blue-600 text-black py-2 rounded hover:bg-blue-700 shadow"
            >
              Submit & Proceed
            </button>
          </div>
        </form>
        {status && <p className="mt-3">{status}</p>}
      </div>
      </div>
    );
  }

  export default SurveyForm;