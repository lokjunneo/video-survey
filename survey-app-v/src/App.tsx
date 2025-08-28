import { HashRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './App.css'
import AuthForm from "./components/AuthForm"
import SurveyForm from "./components/SurveyForm"
import VideoPlayer from "./components/VideoPlayer"
import { surveyForms } from './constants/forms';
import { Instructions } from './components/Instructions';
import { Completion } from './components/Completion';
import { useEffect, useRef, useState } from 'react';
import { FormType } from './constants/FormTypes';
import VideoThumbnail from './components/VideoThumbnail';
import WrapperCard from './components/CardWrapper';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function RoutingElement () {
  const { idParam } = useParams()
  const currentId = idParam ? parseInt(idParam, 10) : -1;

  const [collapseDesc, setCollapseDesc] = useState(false)
  const [showInitial, setShowInitial] = useState(false)
  if (idParam) {
    let id = parseInt(idParam)
    if (!isNaN(parseInt(idParam))){
      if (id === 0) return <Instructions />
      if (id > surveyForms.length) return <Completion />
      id = id-1

      return <div className='w-full min-h-screen bg-gray-50 flex'>
                <SurveyForm className="w-2/5 mr-auto p-8" 
                  vId={surveyForms[id].vidUrl} 
                  qns={surveyForms[id].qns} 
                  isExample={surveyForms[id].formType === FormType.Example}>
                </SurveyForm> 
              <div className='w-3/5 sticky top-0 right-0 h-screen max-h-full flex flex-col items-center justify-center p-16'>
               <div className='flex flex-col max-h-full'>

                  <div className='w-full' onClick={() => {setCollapseDesc(!collapseDesc)}}>
                    <WrapperCard className='w-full flex-row flex' padding={"small"}>
                      <b className='flex-1 justify-center'>Video {currentId}</b>
                      {!collapseDesc ? <ChevronDownIcon className="w-5 h-5"/> : <ChevronRightIcon className="w-5 h-5"/>}
                    </WrapperCard>
                  </div>
                  {
                    // !collapseDesc ?
                    // <WrapperCard className='w-full transition-all duration-300 ease-in-out' padding={"small"} rounded={"none"}>

                    //     <i className="max-w-full break-words">{surveyForms[id].vidDesc}</i> 
                        

                    // </WrapperCard>
                    // : <></>
                  }
                  <WrapperCard className={`w-full flex ${!showInitial ? "": "flex-1"} flex-col overflow-hidden items-center justify-center`}
                    color="none"
                    rounded={"none"}>
                    <VideoPlayer src={surveyForms[id].vidUrl}></VideoPlayer>
                  </WrapperCard>
                  {
                    surveyForms[id].qns.some(item => item.name === "object-consistency") ? 
                    <div className='w-full' onClick={() => {setShowInitial(!showInitial)}}>
                      <WrapperCard className='w-full' padding={"small"}>
                        <b>Show initial frame</b>
                      </WrapperCard> 
                    </div> :
                    <></>
                  }
                  {
                    surveyForms[id].qns.some(item => item.name === "object-consistency") && showInitial ? 
                    <div className='flex-1 overflow-hidden w-full'>
                      <VideoThumbnail src={surveyForms[id].vidUrl}></VideoThumbnail> 
                    </div>
                    :
                    <></>
                  }

                </div>

              </div>
              
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

