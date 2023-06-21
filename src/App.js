import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import DayTwo from './components/Day2/DayTwo';
import DayThree from './components/Day3/DayThree';
import DayFour from './components/Day4/DayFour';
import DayOne from './components/Day1/DayOne';
import NoPage from './NoPage';
import './App.css'
import DayFive from './components/Day5/DayFive';
import DaySix from './components/Day6/DaySix';
import AddUser from './components/Day6/AddUser';
import UpdateUser from './components/Day6/UpdateUser';
import DaySeven from './components/Day7/DaySeven';
import UseMemoUseCallback from './components/Day7/UseMemoUseCallback';
import UseRef from './components/Day7/UseRef';
import DayEight from './components/Day8/DayEight';

const App = () => {
  return (
    <div>
      <center>
        <BrowserRouter>
          <nav className="navbar">
            <ul className="navbar__list">
              <li><Link to="/">Day1</Link></li>
              <li><Link to="/daytwo">Day2</Link></li>
              <li><Link to="/daythree">Day3</Link></li>
              <li><Link to="/dayfour">Day4</Link></li>
              <li><Link to="/dayfive">Day5</Link></li>
              <li><Link to="/daysix">Day6</Link></li>
              <li><Link to="/dayseven">Day7</Link></li>
              <li><Link to="/dayeight">Day8</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<DayOne />} />
            <Route path='/daytwo' element={<DayTwo />} />
            <Route path='/daythree' element={<DayThree />} />
            <Route path='/dayfour' element={<DayFour />} />
            <Route path='/dayfive' element={<DayFive />} />
            <Route path='/daysix' element={<DaySix />} />
            <Route path='/daysix/add-user' element={<AddUser />} />
            <Route path='/update-user/:id' element={<UpdateUser />} />
            <Route path='/dayseven' element={<DaySeven />}>
              <Route path='/dayseven/usememo_usecallback' element={<UseMemoUseCallback />} />
              <Route path='/dayseven/useref' element={<UseRef />} />
            </Route>
            <Route path='/dayeight' element={<DayEight/>}/>
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  )
}
export default App;
