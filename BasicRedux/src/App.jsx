
import { useDispatch } from 'react-redux'
import './App.css'
import Count from './components/Count'

function App() {
  const dispatch = useDispatch();

  return (
    <>
    <button onClick={(e) => dispatch({type: "INCREMENT"})}>Increment</button>
    <br /> <br />
     <Count/>
     <br />
     <button onClick={(e) => dispatch({type: "DECREMENT"})}>Decrement</button>
    </>
  )
}

export default App
