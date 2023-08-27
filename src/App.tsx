import { TodoList, AddTodo } from './components'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Toaster position="bottom-center" />
      <AddTodo />
      <TodoList />

      <footer>Copyright 2023 Ahmed Benali</footer>
    </div>
  )
}

export default App
