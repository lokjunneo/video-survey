// src/components/SubmissionForm.jsx
import React, { useState, type FC, type HTMLAttributes } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'; // Import your initialized db instance
import QuestionCard from './QuestionCard';
import type { RatingLabelMap } from '@/utils/ratinglabels';

interface SurveyFormProps extends HTMLAttributes<HTMLDivElement> {  
  vId?: string; // optional, can override default "rating"
}

const exampleLabels: RatingLabelMap = {
  1: "Perfectly normal",
  2: "Slightly abnormal",
  3: "Moderately abnormal",
  4: "Abnormal",
  5: "Very abnormal",
};

const SurveyForm: FC<SurveyFormProps> = ({vId = "Example", className=""}: SurveyFormProps) => {
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
        
        <form onSubmit={handleSubmit}>
          <QuestionCard 
            name="Natural-example" 
            title="Naturalness" 
            description="How natural are the movements in the video?" 
            labels={exampleLabels}
            ></QuestionCard>

          <br></br>

          <QuestionCard 
            name="Natural-example" 
            title="Naturalness" 
            description="How natural are the movements in the video?" 
            labels={exampleLabels}
            ></QuestionCard>

          <br></br>

          <QuestionCard 
            name="Natural-example" 
            title="Naturalness" 
            description="How natural are the movements in the video?" 
            labels={exampleLabels}
            ></QuestionCard>

          <br></br>

          <QuestionCard 
            name="Natural-example" 
            title="Naturalness" 
            description="How natural are the movements in the video?" 
            labels={exampleLabels}
            ></QuestionCard>

          <br></br>
          
          <div className="flex flex-col">
            <button
              type="submit"
              className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700"
            >
              Submit & Proceed
            </button>
          </div>
        </form>
        {status && <p className="mt-3">{status}</p>}
      </div>
    );
  }

  export default SurveyForm;