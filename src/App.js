
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';


function App() {

  const [data, setData] = useState([])
  useEffect(()=>{

   
    
    // fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
    //   .then(response => response.json())
    //   .then(response =>setData(response.value))
    //   .catch(err => console.error(err));
  
    
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=300be0372ce64ead840346911752051c')
      .then(response => response.json())
      .then(response =>setData(response.articles))
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
