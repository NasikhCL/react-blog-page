
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
// 07d70fd9fb4d4e5192e1aa45e5a7b17a
function App() {
const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=07d70fd9fb4d4e5192e1aa45e5a7b17a')
    .then(res => res.json())
    .then(data=> setData(data.articles) )

  },[])


  console.log(data)
  return (
    <div className="App">
      <Navbar />
      <div className='blogs'>
      { data && data.length > 0 ? data.map((item, index) =>{
          return(
            <Card key={index}  item={item} /> 
          )
        })  : <h2>Loading...</h2>}
      </div>
    </div>
  );
}

export default App;
