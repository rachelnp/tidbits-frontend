import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import GeneralProfile from './components/GeneralProfile';
import EditProfile from './components/EditProfile';
import AddRecipe from './components/AddRecipe';
import RecipePage from './components/RecipePage';
import Asia from './components/Asia';
import Africa from './components/Africa';
import NorthAmerica from './components/NorthAmerica';
import SouthAmerica from './components/SouthAmerica';
import Antarctica from './components/Antarctica';
import Europe from './components/Europe';
import Australia from './components/Australia';
import EditRecipe from './components/EditRecipe';
import Filter from './components/Filter';
import Footer from './components/Footer';
import PrintRecipe from './components/PrintRecipe';
import AboutUs from './components/About';
import WorldMap from './components/WorldMap';
import ErrorPage from './components/ErrorPage';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="/signin" element={ <SignIn /> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/team" element={ <AboutUs /> } />
            <Route path="/userprofile/:userId" element={ <GeneralProfile /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/editprofile/:userId" element={ <EditProfile /> } />
            <Route path='/recipe/add' element={ <AddRecipe />}/>
            <Route path='/recipe/:recipeId' element={ <RecipePage /> }/>
            <Route path='/print/:recipeId' element={ <PrintRecipe /> }/>
            <Route path='/edit/:recipeId' element={ <EditRecipe /> }/>
            <Route path='/asia' element={ <Asia />}/>
            <Route path='/africa' element={ <Africa />}/>
            <Route path='/northamerica' element={ <NorthAmerica />}/>
            <Route path='/southamerica' element={ <SouthAmerica />}/>
            <Route path='/antarctica' element={ <Antarctica />}/>
            <Route path='/europe' element={ <Europe />}/>
            <Route path='/australia' element={ <Australia />}/>
            <Route path="search/:searchQuery" element={<Filter />} />
            <Route path='/map' element={ <WorldMap />}/>
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
