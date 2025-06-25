import { useState, } from 'react'
import { Projects } from './Components/Projects'
import { Important } from './Components/Important'
import { MyDay } from './Components/MyDay'
import { Tasks } from './Components/Tasks'
import AppStyles from './App.module.css'

const App = () => {
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
    <div className={AppStyles.main}>
      <div className={AppStyles.container}>
        <h1 className={AppStyles.header}>Task Manager</h1>
        <div onClick={changeMainPage} className={AppStyles.divs} >
            {/* ICON HERE */}
            <h3>My Day</h3>
            {/* HAVE NUMBER AT END */}
        </div>
        <div onClick={changeMainPage} className={AppStyles.divs}>
            <h3>Important</h3>
        </div>
        <div onClick={changeMainPage} className={AppStyles.divs}>
            <h3>Projects</h3>
        </div>
        <div onClick={changeMainPage} className={AppStyles.divs}>
            <h3>Tasks</h3>
        </div>
      </div>
      <div className={AppStyles.components}>
        <MyDay clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} />
        <Important clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} />
        <Projects clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} />
        <Tasks clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} />
        
      </div>
      <div>
        <p>Suggestions</p>
      </div>
    </div>
  )
}

export default App