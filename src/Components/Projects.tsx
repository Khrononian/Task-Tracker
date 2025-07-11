import { useState } from "react"
import Styles from '../Styles.module.css'
import OtherStyles from '../Input.module.css'

type Props = {
    clickedName: string
    createNewDivTasks: (FormData: object) => void
    changeText: (e: string) => void
    updatedText: string
    changeAmountValues: (name: string) => void
}

const Projects: React.FunctionComponent<Props> = ({ clickedName, createNewDivTasks, changeText, updatedText, changeAmountValues }) => {
    const [projectTasks, setProjectTasks] = useState<{ task?: string, date?: string }[]>([])
    
    const createNewDivs = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)

        e.preventDefault()
        const objectData = Object.fromEntries(formData.entries())
        setProjectTasks(previous => [...previous, objectData])
        console.log('WOY1', formData, objectData, projectTasks)
        createNewDivTasks(objectData)
        changeAmountValues('Projects')
        changeText('')
    }

    return (
        <>
            {clickedName.substring(0, 8) == 'Projects' ? <div className={Styles.backgrounds}>
                <div className={Styles.innerBackground}>
                    <h2 className={`${Styles.h2} ${OtherStyles.mainHeader}`}>Projects</h2>
                    
                    <div className={Styles.tasks}>
                        {projectTasks.map((element, index) => (
                            <div key={index} className={Styles.taskDivs}>{element.task}<span>{element.date}</span></div>
                        ))}
                    </div>
                </div>
                {clickedName.substring(0, 8) == 'Projects' ? <form className={Styles.form} id="taskForm" onSubmit={createNewDivs}>
                    <input name="task" placeholder="Add task" type="text" value={updatedText} onChange={e => changeText(e.currentTarget.value)} />
                    <input name='date' type="date" value={`2025-06-17`}/>
                </form> : null}
            </div> : null}
            
        </>
        
    )
}

export { Projects }