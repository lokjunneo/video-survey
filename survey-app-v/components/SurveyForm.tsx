// src/components/SubmissionForm.jsx
import React, { useState, type FC, type HTMLAttributes } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'; // Import your initialized db instance
import RatingSlider from './RatingSlider';

interface SurveyFormProps extends HTMLAttributes<HTMLDivElement> {
    vId?: string; // optional, can override default "rating"
  }

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
          <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col">
            <p className="text-normal font-bold mb-8">How coherent is the video?</ p>
            <RatingSlider name="coherence-score"></RatingSlider>
          </div>

          <br></br>

          <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col">
            <p className="text-normal font-bold mb-8">How natural are the movements in the video?</ p>
            <RatingSlider name="coherence"></RatingSlider>
          </div>
          
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