import React from 'react'
import ReactDOM from 'react-dom/client'
import BooksList from './Components/BookList';
// import {App} from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello React</h1>)
root.render(<React.StrictMode>
    <BooksList></BooksList>
</React.StrictMode>)