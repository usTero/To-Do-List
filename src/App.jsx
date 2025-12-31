import './App.css'
import Todolist from './TodoApp'

function App() {

  return (
    <div className='app'>
    <Header/>
    <Todolist/>
    </div>
  )
}

export default App


const Header = () => {
  
  const currentDate = new Date().toLocaleDateString();

  return(
    <header>
      <div>
      <h1 className='judul'>To-Do-List</h1>
      <p>{currentDate}</p>    
      </div>
    </header>
  )
}