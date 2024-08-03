import { useDispatch , useSelector} from 'react-redux'
import './App.css'
import { fetchTodos } from './slice/todoSlice'
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if(state.todo.isLoading){
    return (<h1>Loading...</h1>);
  }


  return (
    <>
      <h1>Redux with Api call </h1>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch todo</button>
      <div>
        {
          state.todo.data?.map((todo, id) => (
             <p key={id}>{todo.id} - {todo.title}</p>
          ))
        }
      </div>
    </>
  )
}

export default App
