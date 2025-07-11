import { useState, } from 'react'
import { Projects } from './Components/Projects'
import { Important } from './Components/Important'
import { MyDay } from './Components/MyDay'
import { Tasks } from './Components/Tasks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as openStar } from '@fortawesome/free-regular-svg-icons'
import { faSun as sunset } from '@fortawesome/free-regular-svg-icons'
import { faBarChart as project } from '@fortawesome/free-regular-svg-icons'
import { faBuilding as task } from '@fortawesome/free-regular-svg-icons'
// import { faHouse as project } from '@fortawesome/free-regular-svg-icons'
import AppStyles from './App.module.css'

const App = () => {
  const [data, setData] = useState({})
  const [clickedName, setClickedName] = useState('')
  const [updatedText, setUpdatedText] = useState('')
  const [amount, setAmount] = useState([{
    name: 'My Day', amount: 0
  }, { name: 'Important', amount: 0 }, { name: 'Projects', amount: 0 },
  { name: 'Tasks', amount: 0 }])

  const changeMainPage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(e, e.target, clickedName, clickedName.substring(0, 5))
    setClickedName(e.currentTarget.innerText)
  }

  const changeText = (textValue: string) => {
    setUpdatedText(textValue)
  }

  const createNewDivTasks = (formData: object) => {
    setData(formData)

    console.log('WOY', data)
  }

  const changeAmountValues = ( name: string ) => {
    setAmount(previous => 
      previous.map((obj) => 
      obj.name == name ? { ...obj, amount: obj.amount++ } : obj)
    )
  }

  return (
    <div className={AppStyles.main}>
      <div className={AppStyles.container}>
        <h1 className={AppStyles.header}>Task Manager</h1>
        <div onClick={changeMainPage} className={AppStyles.divs} >
            <FontAwesomeIcon icon={sunset} />
            <h3>My Day</h3>
            {amount[0].amount != 0 ? <span>{amount[0].amount}</span> : null}
            {/* HAVE NUMBER AT END */}
        </div>
        <div onClick={changeMainPage} className={AppStyles.divs}>
            <FontAwesomeIcon icon={openStar} />
            <h3>Important</h3>
            {amount[1].amount != 0 ? <span>{amount[1].amount}</span> : null}
        </div>
        <div onClick={changeMainPage} className={AppStyles.divs}>
            <FontAwesomeIcon icon={project} />
            <h3>Projects</h3>
            {amount[2].amount != 0 ? <span>{amount[2].amount}</span> : null}
        </div>
        <div onClick={changeMainPage} className={AppStyles.divs}>
            <FontAwesomeIcon icon={task} />
            <h3>Tasks </h3>
            {amount[3].amount != 0 ? <span>{amount[3].amount}</span> : null}
        </div>
      </div>
      <div className={AppStyles.components}>
        <MyDay clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} changeAmountValues={changeAmountValues} />
        <Important clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} changeAmountValues={changeAmountValues} />
        <Projects clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} changeAmountValues={changeAmountValues} />
        <Tasks clickedName={clickedName} createNewDivTasks={createNewDivTasks} changeText={changeText} updatedText={updatedText} changeAmountValues={changeAmountValues} />
        
      </div>
    </div>
  )
}

export default App