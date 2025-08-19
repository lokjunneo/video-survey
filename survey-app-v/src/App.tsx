import './App.css'
import AuthForm from "../components/auth-form"
import SurveyForm from "../components/SurveyForm"
import VideoPlayer from "../components/VideoPlayer"

function App() {
  return (
    <div className="App">
      { window.sessionStorage.getItem("password") ? 
      <div className='grid grid-cols-5 gap-4 p-4'>
        <VideoPlayer className='col-span-3'></VideoPlayer> 
        <SurveyForm className="col-span-2"></SurveyForm> 
      </div> : <AuthForm></AuthForm> }
      
    </div>
  );
}

export default App;

