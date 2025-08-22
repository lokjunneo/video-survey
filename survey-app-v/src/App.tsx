import { HashRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './App.css'
import AuthForm from "./components/AuthForm"
import SurveyForm from "./components/SurveyForm"
import VideoPlayer from "./components/VideoPlayer"
import { surveyForms } from './constants/forms';
import { Instructions } from './components/Instructions';
import { Completion } from './components/Completion';
import { useEffect, useRef } from 'react';
import { FormType } from './constants/FormTypes';

function RoutingElement () {
  const { idParam } = useParams()
  if (idParam) {
    let id = parseInt(idParam)
    if (!isNaN(parseInt(idParam))){
      if (id === 0) return <Instructions />
      if (id > surveyForms.length) return <Completion />
      id = id-1
      return <div className='w-full min-h-screen bg-gray-50 flex'>
              <div className='w-3/5 sticky top-0 left-0 h-screen max-h-full flex items-center justify-center p-8'>
                <VideoPlayer src={surveyForms[id].vidUrl} description={surveyForms[id].vidDesc}></VideoPlayer>
              </div>
              <SurveyForm className="w-2/5 ml-auto p-10" 
                vId={surveyForms[id].vidUrl} 
                qns={surveyForms[id].qns} 
                isExample={surveyForms[id].formType === FormType.Example}></SurveyForm> 
            </div>
    }
  }
  return <Navigate to="/" />
}

function RefreshElement() {
  const location = useLocation();
  const currPathname = useRef("")

  useEffect(() => {
    console.log(location)
    if (currPathname.current === "") {
      currPathname.current = location.pathname
    }
    else if (currPathname.current.includes("/") && currPathname.current !== location.pathname) {
      console.log('Location changed');
      window.location.reload()
    }
  }, [location]);

  return <></>

}

function App() {
  return (
    <div className="App">
      { window.sessionStorage.getItem("password") ? 
        <HashRouter>
          <Routes>
            <Route path="/:idParam" element={
              <div>
                <RefreshElement />
                <RoutingElement />
              </div>
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

