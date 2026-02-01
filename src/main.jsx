import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import TodoProvider from './components/contextWrapper'
import Todo from './components/todo'


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <TodoProvider> 
      {/* <App /> */}
     <Todo />
  </TodoProvider>
  
   </StrictMode> 
)
