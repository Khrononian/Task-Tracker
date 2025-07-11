import { useState } from "react"
import Styles from '../Styles.module.css'

type Props = {
    clickedName: string
    createNewDivTasks: (FormData: object) => void
    changeText: (e: string) => void
    updatedText: string
    changeAmountValues: (name: string) => void
}

const MyDay: React.FunctionComponent<Props> = ( { clickedName, createNewDivTasks, changeText, updatedText, changeAmountValues } ) => {
    const [myDayTasks, setMyDayTasks] = useState<{ task?: string, date?: string }[]>([])

    const createNewDivs = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)

        e.preventDefault()
        const objectData = Object.fromEntries(formData.entries())
        setMyDayTasks(previous => [...previous, objectData])
        console.log('WOY1', formData, objectData, myDayTasks)
        createNewDivTasks(objectData)
        changeAmountValues('My Day')
        changeText('')
    }

    return (
        <>
            {clickedName.substring(0, 6) == `My Day` ? <div className={Styles.backgrounds}>
                <div className={Styles.innerBackground}>
                    <h2 className={Styles.h2}>My Day</h2>
                    <h4>{new Date().toDateString()}</h4>
                    <div className={Styles.tasks}>
                        {myDayTasks.map((element, index) => (
                            <div key={index} className={Styles.taskDivs}>{element.task}<span>{element.date}</span></div>
                        ))}
                    </div>
                </div> 
                {clickedName.substring(0, 6) == `My Day` ? <form className={Styles.form} id="taskForm" onSubmit={createNewDivs}>
                    <input name="task" placeholder="Add task" type="text" value={updatedText} onChange={e => changeText(e.currentTarget.value)} />
                    <input name='date' type="date" value={`2025-06-17`}/>
                </form> : null}
            </div> : null}
        </>
        
    )
}


export { MyDay }