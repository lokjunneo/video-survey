import { useNavigate } from "react-router-dom"


export const Instructions = () => {
    const navigate = useNavigate();
    return <div>
        <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg flex-col px-5 py-5 text-left">
            <p className="text-normal font-bold mb-1">Instructions</ p> 
            <p className="text-normal font-normal mb-3">For each question, rate the video on a scale of 1 to 5.</ p> 
            <p className="text-normal font-normal mb-3"> Focus only on the <b>specific</b> attribute mentioned in the question. </p>
            <p className="text-normal font-normal italic mb-3">Example: If the question is about the quality of movements, evaluate only the movements and ignore other issues that are unrelated.</ p> 
          </div>

          <br />

          <button
            type="submit"
            className="g-blue-600 text-black py-2 rounded max-w-md w-full hover:bg-blue-700 shadow"
            onClick={ () => {
                navigate("/1")
            }}
          >
            Submit
          </button>
    </div>
}