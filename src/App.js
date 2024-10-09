import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputersPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchePage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomenPage'
import BooksPage from './stores/pages/BooksPage'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import SpeakersPage from './stores/pages/SpeakersPage'
import AcPage from './stores/pages/AcPage'
import TvPage from './stores/pages/TvPage'
import MobileSingle from './Singles/MobileSingle'
import ComputerSingle from './Singles/ComputersSingle'
import WatcheSingle from './Singles/WatcheSingle'
import MenSingle from './Singles/MenSingle'
import WomenSingle from './Singles/WomenSingle'
import BookSingle from './Singles/BookSingles'
import FurnitureSingle from './Singles/FurnitureSingle'
import KitchenSingle from './Singles/KitchenSingles'
import FridgeSingle from './Singles/FridgeSingle'
import SpeakerSingle from './Singles/SpeakersSingle'
import AcSingle from './Singles/AcSingle'
import TvSingle from './Singles/TvSingle'
import UserCart from './stores/UserCart'





const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/Computers' element={<ComputersPage />} />
        <Route path='/men-Fashion' element={<MenPage />} />
        <Route path='/Women_dressing' element={<WomanPage />} />
        <Route path='/Books' element={<BooksPage />} />
        <Route path='/Watches' element={<WatchPage />} />
        <Route path='/Furniture' element={<FurniturePage />} />
        <Route path='/Kicthen' element={<KitchenPage />} />
        <Route path='/Fridge' element={<FridgePage />} />
        <Route path='/Speakers' element={<SpeakersPage />} />
        <Route path='/Ac' element={<AcPage />} />
        <Route path='/Tv' element={<TvPage />} />
        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/computers/:id' element={<ComputerSingle />} />
        <Route path='/watches/:id' element={<WatcheSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/women/:id' element={<WomenSingle />} />
        <Route path='/Books/:id' element={<BookSingle />} />
        <Route path='/furniture/:id' element={< FurnitureSingle />} />
        <Route path='/kitchen/:id' element={< KitchenSingle />} />
        <Route path='/fridge/:id' element={< FridgeSingle />} />
        <Route path='/speakers/:id' element={< SpeakerSingle />} />
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/tvs/:id' element={<TvSingle />} />
        <Route path='/cart' element={<UserCart />} />

      </Routes>
    </div>
  )
}

export default App