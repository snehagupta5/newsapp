import React ,{useEffect, useState} from 'react';
import Navbar from './Navbar';
import News from './News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import About from './About';

function App() {
  const [progress, setProgress] = useState(0);
  const[keys , setKeys] = useState("All");
  console.log(keys);
  return (
    <div className="App">
      <Router>
        <Navbar keys={keys} setKeys={setKeys}/>
        <LoadingBar color="#ff7c05" progress={progress}
           onLoaderFinished={() => setProgress(0)} />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} key='home' pageSize={20} country='in' category='general' keys={keys}/>}></Route>
          <Route path='/general' element={<News setProgress={setProgress} key='general' pageSize={20} country='in' category='general' keys={keys}/>}></Route>
          <Route path='/business' element={<News setProgress={setProgress} key='business' pageSize={20} country='in' category='business'keys={keys} />}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={20} country='in' category='entertainment' keys={keys} />}></Route>
          <Route path='/health' element={<News setProgress={setProgress} key='health' pageSize={20} country='in' category='health' keys={keys} />}></Route>
          <Route path='/science' element={<News setProgress={setProgress} key='science' pageSize={20} country='in' category='science' keys={keys} />}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={20} country='in' category='sports' keys={keys} />}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={20} country='in' category='technology' keys={keys} />}></Route>
          <Route path='/About' element={<About  />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
