import { useEffect, useState } from 'react'
import Dashboard from './components/Pages/Dashboard/Dashbord'
import Tickets from './components/Pages/Tickets/Tickets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [selectedAirline, setSelectedAirline] = useState("")
  const [blitCount, setBlitCount] = useState(0)
  const [counter, setCounter] = useState([])

  let arr = []
  useEffect(() => {
    for (let i = 1; i <= (+blitCount / 8); i++) {
      arr.push(i)
    }
    setCounter(arr)
  }, [blitCount])




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard blitCount={blitCount} selectedAirline={selectedAirline} setBlitCount={setBlitCount} setSelectedAirline={setSelectedAirline} />} />
          <Route path='/tickets' element={<Tickets selectedAirline={selectedAirline} counter={counter} more={blitCount % 8} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
