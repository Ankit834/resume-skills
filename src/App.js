import './App.css';
import { useCallback, useState } from 'react';

function App() {
  const [jobDescription, setJobDescription] = useState('');
  const [jobResume, setJobResume] = useState();

  const [isResume, setIsResume] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [score, setScore] = useState(null);

  const handleJobDescChange = useCallback((event) => {
    setJobDescription(event.target.value);
  }, []);

  const handleResumeChange = useCallback((event) => {
    setJobResume(event.target.files[0]);
  }, []);

  const callApiAndGetScore = useCallback(() => {
    // Call api
  }, []);

  const onGetScore = useCallback(() => {
    setIsLoading(true);
  }, []);

  const onReset = useCallback(() => {
    setIsResume(null);
    setJobDescription('');
    setScore(null);
  }, []);

  return (
    <div className='App'>
      <h4>Get Match Score for Candidate with given job Description</h4>
      <div className='dataFlex'>
        <div>
          <h4>Add Job Description</h4>
          <textarea
            className='jobDescriptionText'
            onChange={handleJobDescChange}
          >
            {jobDescription}
          </textarea>
        </div>
        <div>
          <h4>Upload Resume</h4>
          <input
            type='file'
            name='resume'
            onChange={handleResumeChange}
          />
        </div>
      </div>

      {isLoading ? (
        <div>...Getting Score</div>
      ) : (
        <div>
          <button
            className='button scoreButton'
            onClick={onGetScore}
          >
            Get Score
          </button>
          <button
            className='button resetButton'
            onClick={onGetScore}
          >
            Reset
          </button>
        </div>
      )}

      {!isLoading && score && (
        <h4>{`Resume matches to ${score}% of the Job Description`}</h4>
      )}
    </div>
  );
}

export default App;
