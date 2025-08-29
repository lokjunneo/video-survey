import { HashRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './App.css'
import AuthForm from "./components/AuthForm"
import MOSSurveyForm from "./components/MOSSurveyForm"
import { surveyForms } from './constants/forms';
import { Instructions } from './components/Instructions';
import { Completion } from './components/Completion';
import { useEffect, useRef } from 'react';
import { FormType } from './constants/FormTypes';

import VideoModule from './components/VideoModule';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SectionMarker } from './components/SectionMarker';


function RoutingElement () {
  const { idParam } = useParams()

  if (idParam) {
    let id = parseInt(idParam)
    if (!isNaN(parseInt(idParam))){
      if (id === 0) return <Instructions />
      if (id > surveyForms.length) return <Completion />
      id = id-1

      // lazy
      if (surveyForms[id].formType === FormType.SectionMarker) 
        return <SectionMarker title={surveyForms[id].vidUrl} description={surveyForms[id].vidDesc} />

      window.scrollTo(0, 0);
      return <Provider store={store}>
              <div className='w-full min-h-screen bg-gray-50 flex flex-col md:flex-row'>
                {/* Mobile: Video module fixed at top, Desktop: Right side */}
                <div className='max-w-full md:w-3/5 md:order-2 md:h-screen sticky top-0 md:right-0 max-h-1/5 md:max-h-full flex flex-col items-center justify-center p-4 md:p-16'>
                  <VideoModule 
                    vidUrl={surveyForms[id].vidUrl} 
                    displayInitialFrame={surveyForms[id].qns.some(item => item.name === "object-consistency")}
                  />
                </div>
                
                {/* Mobile: Survey form scrollable below, Desktop: Left side */}
                <MOSSurveyForm 
                  className="w-full md:w-2/5 md:order-1 md:mr-auto p-4 md:p-8 flex-1 overflow-y-auto" 
                  vId={surveyForms[id].vidUrl} 
                  qns={surveyForms[id].qns} 
                  isExample={surveyForms[id].formType === FormType.Example}
                />
              </div>
            </Provider>
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

