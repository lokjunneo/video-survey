import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import AuthForm from "./components/AuthForm"
import SurveyForm from "./components/SurveyForm"
import VideoPlayer from "./components/VideoPlayer"
import { surveyForms } from './constants/forms';

function App() {
  return (
    <div className="App">
      { window.sessionStorage.getItem("password") ? 
        <BrowserRouter>
          <Routes>
            <Route path="/video-survey/:id" element={
              <div className='w-full min-h-screen bg-gray-50 flex'>
                <div className='w-3/5 sticky top-0 left-0 h-screen max-h-full flex items-center justify-center p-8'>
                  <VideoPlayer src={surveyForms[0].vidUrl} description={surveyForms[0].vidDesc}></VideoPlayer>
                </div>
                      <SurveyForm className="w-2/5 ml-auto p-10"  qns={surveyForms[0].qns}></SurveyForm> 
              </div>
            }>
            </Route>
            <Route path="/video-survey/" element={<Navigate to="/video-survey/1" replace />}></Route>
          </Routes>
        </BrowserRouter> : <AuthForm></AuthForm> }
      
    </div>
  );
}

export default App;

