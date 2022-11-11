import React from 'react';

function IndexContent({ setState }) {
  const toForm = () => setState(2);

  // React.useEffect(() => {
  //   fetch('/api/jobs')
  //     .then(res => res.json)
  //     .then(data => s)
  // }, []);
  

  return (
  <div className='boxContent'>
    <h1>The quickest way to your new career!</h1>
    <p>So, you're looking for a new line of work? It's tough out there, and who knows how much you've tried to find the
      right path in life. But don't worry, friend, you've come to the right place.</p>
    <p>Instant Job Coach is the quickest way to find your new career. And it's totally free! Why not give it a try?</p>
    <button onClick={toForm} className='toFormButton'>Let's go!</button>
  </div>
  )
}

export default IndexContent;