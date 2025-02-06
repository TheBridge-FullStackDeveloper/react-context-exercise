import '../styles/global.css'
import Index from "../components/Index"
import useGOTCharacters from '../hooks/useGOTCharacters';
import { GotContext } from '../context/GotContext';







const App = () => {
  const {data: charactersData} = useGOTCharacters();


  return (
    <GotContext.Provider value={charactersData}>
      <Index/>
    </GotContext.Provider>
  )
}

export default App
