
import MainBlock from './components/MainBlock/MainBlock'
import TimeBlock from './components/TimeBlock/TimeBlock'
import InfoBlock from './components/InfoBlock/InfoBlock'
import ConfirmationBlock from './components/ConfirmationBlock/ConfirmationBlock'
import MapBlock from './components/MapBlock/MapBlock'
import AddToCalendarBlock from './components/AddToCalendarBlock/AddToCalendarBlock'

function App() {

 return (
  <>
    <AddToCalendarBlock />
    <MainBlock />
    <TimeBlock />
    <InfoBlock />
    <ConfirmationBlock />
    <MapBlock />
  </>
 )
}

export default App
