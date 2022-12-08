
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=300be0372ce64ead840346911752051c')
    .the n(res => res.json())
    .then(data=> setData(data) )

  },[])

  console.log(data)
  return (
    <div className="App">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
