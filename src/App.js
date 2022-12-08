
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
// 07d70fd9fb4d4e5192e1aa45e5a7b17a
function App() {

  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('07d70fd9fb4d4e5192e1aa45e5a7b17a');

  const [data, setData] = useState([])
  useEffect(()=>{

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '43f1bd7fb7mshf340ae335901eeap185a3cjsn6edb7ac3a71b',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    
    // fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
    //   .then(response => response.json())
    //   .then(response =>setData(response.value))
    //   .catch(err => console.error(err));
  
    
    fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null', options)
      .then(response => response.json())
      .then(response =>setData(response.value))
      .catch(err => console.error(err));
  
  },[])

// const [dd, setdd] = useState([])

  // console.log(data)
  return (
    <div className="App">
      <Navbar />
      <div className='blogs'>
      { (data && data.length > 0)? data.map((item, index) =>{
          return(
            <Card key={index}  item={item} /> 
          )
        })  : <h2>Loading...</h2>}
      </div>
    </div>
  ); 
}

export default App;
