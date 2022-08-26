import './App.css'
import { useState } from "react"
import { useEffect } from 'react';

import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/Homepage/homePage';
import AboutPage from './components/Pages/AboutPage/aboutPage';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    console.log('go to page named:', page)
    setCurrentPage(page);
  }
  return (
    <Layout onPageChange={handlePageChange} >
      {currentPage === 'home' ? <HomePage /> : <AboutPage />}
    </Layout >
  )
}
export default App


/*const App = () => {
  const [toDoID, setToDoId] = useState(0);
  const [toDoTitle, setToDoTitle] = useState('');
  const [toDoContent, setToDoContent] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${toDoID}`)
      .then(response => response.json())
      .then(toDo => {
        console.log(toDo)
        setToDoTitle(toDo.title)

      })
    console.log("execut daca se schimba counterul");
  }, [toDoID]);


  return (

    <div>
      <span>TodoID:
        {toDoID}</span>
      <h1> Todo title: {toDoTitle}</h1>
      <button onClick={() => setToDoId(toDoID + 1)}>Fatch next Todo</button>
    </div>
  )
}
*/



/* 
copie codul in sus si ai evenimente pe componente

Add Evenimente pe componente
 const Blogpost = (props) => {
   return (
     <div className="blogpost" onClick={() => {
       console.log("sa facem ceva in componenta", props)

       if (props.onPostClick) {
         props.onPostClick()
       }
     }}>
       <h1>{props.title}</h1>
       <p>{props.content}</p>
     </div>
//   )
// }
// const App = () => {
//   return (
//     <>
//       <Blogpost onPostClick={() => {
//         console.log("primul post click")
//       }} title="Titlu1" content="Lorem ipsum dolor sit amet consecteturaaaaaaaaaaaa, adipisicing elit. Animi, nesciunt." />
       <Blogpost title="Titlu2" content="Lorem ipsum dolor sit amet consecteturbbbbbbbbbb, adipisicing elit. Animi, nesciunt." />
       <Blogpost onPostClick={() => {
         console.log("ultimul post click")
       }} title="Titlu3" content="Lorem ipsum dolor sit amet consecteturcccccccccc, adipisicing elit. Animi, nesciunt." />
     </>
   )
 } */

/*
  UseState
const App = () => {
 const stateIncrement = useState(0);
 const toDoID = stateIncrement[0];
 const setToDoId = stateIncrement[1];
 const handleClick = () => {
   console.log("You clicked me!");
   setToDoId(toDoID + 10);
   if (toDoID >= 20) {
     console.log("sa executat ca e mai mare ca 10")
   } if (toDoID > 30) {
     console.log("sa executat ca e mai mare ca 30")
   }
 }


 return (

   <div>
     <span>{toDoID}</span>
     <button onClick={handleClick}>Increment</button>
   </div>
 )
} */
/* const App = () => {

  useEffect(() => {

  }, []);
  return (
    <div> test</div>
  )
} */