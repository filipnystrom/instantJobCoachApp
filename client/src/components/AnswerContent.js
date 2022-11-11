import jobArray from "../mockDb/mockDb";
import React from 'react';

function AnswerContent({ setState, jobs }) {
  const toForm = () => setState(2);

  const jobRandomizer = array => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const job = jobRandomizer(jobs[0]);

  return (
    <div className='boxContent'>
      <p>Hey buddy, so nice to see you here! Let's see what cool career we got for you today. You'll probably be a fantastic:</p>
      <h3>{job.title}</h3>
      <p>{job.descriptionP1}</p>
      <p>{job.descriptionP2}</p>
      <button onClick={toForm} className='toFormButton'>Try again!</button>
    </div>
  )
}

export default AnswerContent;