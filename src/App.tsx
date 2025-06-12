import { useState } from 'react'
import { Projects } from './Components/Projects'
import { Important } from './Components/Important'
import { MyDay } from './Components/MyDay'
import { Tasks } from './Components/Tasks'

type Props = {
    changeMainPage: (e: React.MouseEvent<HTMLDivElement>) => void
    clickedName: string
}


const App = () => {
  const [myDayTasks, setMyDayTasks] = useState([{}])
  const [importantTasks, setImportantTasks] = useState([{}])
  const [projectTasks, setProjectTasks] = useState([{}])
  const [newTasks, setNewTasks] = useState([{}])
  const [randomTasks, setRandomTasks] = useState([{}])
  const [clickedName, setClickedName] = useState('')

  const changeMainPage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(e.target, clickedName)
    setClickedName(e.currentTarget.innerText)

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
        <div>
            <h3>Projects</h3>
        </div>
        <div>
            <h3>Tasks</h3>
        </div>
      </div>
      <div>
        <MyDay clickedName={clickedName}  />
        <Important />
        <Projects />
        <Tasks />
        
      </div>
    </>
  )
}

export default App
