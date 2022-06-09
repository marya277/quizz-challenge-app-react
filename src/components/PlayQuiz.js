import React, { useEffect, } from 'react';

const PlayQuiz = () => {

  const API_URL = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean#";

  //const [fetchedData, setFetchedData] = useState([]);
  const getapi = async () => {
    const data = await fetch(API_URL);
    console.log(data.status)
    const datajson = await data.json();
    console.log(datajson)
    //setFetchedData(datajson.results)
    const resultfetch = datajson.results
    console.log(resultfetch)
  }
  useEffect(() => {
    getapi()
  }, [])
  return (
    <div className='container-quiz'>
      {
  resultfetch.map((t) => {
   return (
    <p key={t.category}>
     {t.question}
    </p>
   )
})}
    </div>

  );
}

export default PlayQuiz;