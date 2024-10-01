import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import {store} from './app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AddTodo />
    <Todo />
  </Provider>,
)
