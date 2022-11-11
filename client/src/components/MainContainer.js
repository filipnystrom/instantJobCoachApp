import { useState, useEffect } from 'react';
import jobcoachlogo from '../resources/jobcoachlogo.png';
import IndexContent from "./IndexContent";
import FormContent from "./FormContent";
import AnswerContent from "./AnswerContent";

function MainContainer() {
  const [state, setState] = useState(1);
  const [jobs, setJobs] = useState([]);

  const toHome = () => setState(1);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(res => res.json())
      .then(data => setJobs(jobs => [...jobs, data]))
  }, []);

  const content = () => {
    if (state === 1) {
      return <IndexContent setState={setState} />
    };
    if (state === 2) {
      return <FormContent setState={setState} />
    };
    if (state === 3) {
      return <AnswerContent setState={setState} jobs={jobs} />
    };
  };

  return (
    <div className='mainContainer'>
      <img onClick={toHome} className='logo' src={ jobcoachlogo } alt='logo' />
      {content()}
    </div>
  )
}

export default MainContainer;