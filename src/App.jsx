import { useState } from 'react'
import './Styles/App.css'
import './Styles/AppPost.css'
import AppGridItems from './components/AppGridItems'
import AppHeader from './components/AppHeader'
import AppPost from './components/AppPost'
import AllCactus from './data/cactus'
import AppSearch from './components/AppSearch'


function App() {
  const [selectedCactus, setSelectedCactus] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onCactusOpenClick(theCactus) {
    setSelectedCactus(theCactus);
  }

  function onCactusCloseClick () {
    setSelectedCactus(null);
  }


  const cactusElements = AllCactus.filter((cactus) => {
    return cactus.title.includes(searchText);
  }).map((cactus, index) => {
    return <AppGridItems key={index} cactus={cactus} onCactusClick={onCactusOpenClick} />;
  })

  let cactusPost = null;
  if (!!selectedCactus) {
      cactusPost = <AppPost cactus={selectedCactus} onBgClick={onCactusCloseClick} />;    
  }

  return (
    <div className="App">
      <AppHeader />
      <AppSearch value={searchText} onValueChange={setSearchText} /> 
      <div className="app-grid">
        {cactusElements}
      </div>
      {cactusPost}
    </div> 
  )
}

export default App
