import { useState, } from 'react'
import { Projects } from './Components/Projects'
import { Important } from './Components/Important'
import { MyDay } from './Components/MyDay'
import { Tasks } from './Components/Tasks'

const App = () => {
  const [importantTasks, setImportantTasks] = useState([{}])
  const [projectTasks, setProjectTasks] = useState([{}])
  const [newTasks, setNewTasks] = useState([{}])
  const [randomTasks, setRandomTasks] = useState([{}])
  const [data, setData] = useState({})
  const [clickedName, setClickedName] = useState('')
  const [updatedText, setUpdatedText] = useState('')

  const changeMainPage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(e.target, clickedName)
    setClickedName(e.currentTarget.innerText)

  }

  const changeText = (textValue: string) => {
    setUpdatedText(textValue)
  }

  const createNewDivTasks = (formData: object) => {
    setData(formData)

    console.log('WOY', data)
  }
  return (
    <>
      <h1>My Tasks</h1>
      <div>
        <div style={{ background: 'red' }} onClick={changeMainPage}>
            {/* ICON HERE */}
            <h3>My Day</h3>
            {/* HAVE NUMBER AT END */}
        </div>
        <div onClick={changeMainPage}>
            <h3>Important</h3>
        </div>
        <div onClick={changeMainPage}>
            <h3>Projects</h3>
        </div>
        <div onClick={changeMainPage}>
            <h3>Tasks</h3>
        </div>
      </div>
      <div>
        <MyDay clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} />
        <Important clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} />
        <Projects clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} />
        <Tasks clickedName={clickedName} />
        
      </div>
    </>
  )
}

export default App