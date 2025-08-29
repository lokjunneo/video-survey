// src/components/SubmissionForm.jsx
import React, { useEffect, useRef, useState, type FC, type HTMLAttributes } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'; // Import your initialized db instance
import QuestionCard from './QuestionCard';
import type { QuestionDataFormat } from '@/utils/questiondataformat';
import { useNavigate, useParams } from 'react-router-dom';
import AdditionalInput from './AdditionalInputCard';

interface MOSSurveyFormProps extends HTMLAttributes<HTMLDivElement> {  
  vId: string; // optional, can override default "rating"
  isExample?: boolean;
  qns?: QuestionDataFormat[]
}

const MOSSurveyForm: FC<MOSSurveyFormProps> = ({vId = "Example", className="", isExample=false,qns=[]}: MOSSurveyFormProps) => {
    const [status, setStatus] = useState<string>("");
    const { idParam } = useParams()
    const navigate = useNavigate()
    const currentId = idParam ? parseInt(idParam, 10) : -1;
    // const newId = Number.isNaN(currentId) || currentId < 1 ? 0 : currentId + 1;

    const newId = useRef(-1)
    useEffect( () => {
      newId.current = Number.isNaN(currentId) || currentId < 1 ? 0 : currentId + 1;
    })
    
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
          videoId: vId,
          createdAt: new Date(),
          password: window.sessionStorage.getItem("password"), 
        });
  
        setStatus("✅ Submission successful! Moving on...");

        navigate(`/${newId.current}`);

        window.location.reload();


        form.reset();
      } catch (err) {
        console.log(err)
        setStatus("❌ Failed to submit results.");
      }
    };
  
    return (
      <div className={className}>
        
        <div className='w-auto inline-flex flex-col'>
          
        <form onSubmit={(e) => {handleSubmit(e)}}>
          {
            qns.map((qn) => {
              return <div>
              
                <QuestionCard 
                  name={qn.name}
                  title={qn.title} 
                  description={qn.description}
                  additionalExplanation={qn.additionalExplanation} 
                  requireExplanation={qn.requireExplanation !== undefined ? qn.requireExplanation : true}
                  labels={qn.ratinglabels}
                  />

                  <br />
                  
                </div>
            })
          }
          {
            !isExample && <AdditionalInput />
          }

          <br />
          
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

  export default MOSSurveyForm;