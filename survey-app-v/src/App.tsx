import { HashRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './App.css'
import AuthForm from "./components/AuthForm"
import SurveyForm from "./components/SurveyForm"
import { surveyForms } from './constants/forms';
import { Instructions } from './components/Instructions';
import { Completion } from './components/Completion';
import { useEffect, useRef } from 'react';
import { FormType } from './constants/FormTypes';

import VideoModule from './components/VideoModule';
import { SurveyContextProvider } from './context/VideoContextProvider';

function RoutingElement () {
  const { idParam } = useParams()

  if (idParam) {
    let id = parseInt(idParam)
    if (!isNaN(parseInt(idParam))){
      if (id === 0) return <Instructions />
      if (id > surveyForms.length) return <Completion />
      id = id-1

      return <SurveyContextProvider>
                <div className='w-full min-h-screen bg-gray-50 flex'>
                  <SurveyForm className="w-2/5 mr-auto p-8" 
                    vId={surveyForms[id].vidUrl} 
                    qns={surveyForms[id].qns} 
                    isExample={surveyForms[id].formType === FormType.Example}>
                  </SurveyForm> 
                  <div className='w-3/5 sticky top-0 right-0 h-screen max-h-full flex flex-col items-center justify-center p-16'>
              
                    <VideoModule vidUrl={surveyForms[id].vidUrl} displayInitialFrame={surveyForms[id].qns.some(item => item.name === "object-consistency")}></VideoModule>
              
                  </div>
              
                </div>
            </SurveyContextProvider>
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

