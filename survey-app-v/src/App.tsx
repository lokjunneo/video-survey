import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import './App.css'
import AuthForm from "./components/AuthForm"
import SurveyForm from "./components/SurveyForm"
import VideoPlayer from "./components/VideoPlayer"
import { surveyForms } from './constants/forms';
import { Instructions } from './components/Instructions';

function RoutingElement () {
  const { idParam } = useParams()
  if (idParam) {
    let id = parseInt(idParam)
    if (!isNaN(parseInt(idParam))){
      if (id === 0) return <Instructions />
      id = id-1
      return <div className='w-full min-h-screen bg-gray-50 flex'>
              <div className='w-3/5 sticky top-0 left-0 h-screen max-h-full flex items-center justify-center p-8'>
                <VideoPlayer src={surveyForms[id].vidUrl} description={surveyForms[id].vidDesc}></VideoPlayer>
              </div>
              <SurveyForm className="w-2/5 ml-auto p-10" vId={surveyForms[id].vidUrl} qns={surveyForms[id].qns}></SurveyForm> 
            </div>
    }
  }
  return <></>
}

function App() {
  return (
    <div className="App">
      { window.sessionStorage.getItem("password") ? 
        <HashRouter>
          <Routes>
            <Route path="/:idParam" element={
              <RoutingElement />
            }>
            </Route>
            <Route path="*" element={<Navigate to="0" replace />}></Route>
          </Routes>
        </HashRouter> : 
        <HashRouter>
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          
        </HashRouter> }
      
    </div>
  );
}

export default App;

