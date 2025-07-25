import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { faStar as openStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import Styles from '../Styles.module.css'
import InputStyle  from '../Input.module.css'

type Props = {
    clickedName: string
    createNewDivTasks: (FormData: object) => void
    changeText: (e: string) => void
    updatedText: string
    changeAmountValues: (name: string) => void
}

const Important: React.FC<Props> = ({ clickedName, createNewDivTasks, changeText, updatedText, changeAmountValues }) => {
    const [importantTasks, setImportantTasks] = useState<{ task?: string, important?: string }[]>([])
    const [importance, setImportance] = useState('false')

    const createNewDivs = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)
        const importantInput = formData.get('important')
        const objectData = Object.fromEntries(formData.entries())
        
        e.preventDefault()
        
        if (objectData.task == '') {
            console.log('NO ')
            alert('Add Text!')
            return
        }

        setImportantTasks(previous => [...previous, objectData])
        if (objectData.important == undefined) objectData.important = 'false'

        console.log('WOY1', formData, objectData, importantTasks, importantInput, importance)
        console.log('WOY2', objectData.important)
        createNewDivTasks(objectData)
        changeAmountValues('Important')
        changeText('')
    }

    const handleCheckedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('WOY3', e.currentTarget)
        if (e.currentTarget.checked == false) setImportance('false')
        else setImportance('true')
    }

    const handleStarredValues = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log('CLICKED', e.currentTarget, e.currentTarget.parentElement?.innerText, e.currentTarget.innerText)
        const parent = e.currentTarget.parentElement

        setImportantTasks(previous =>
            previous.map((obj) => 
                obj.task == parent?.innerText ? {...obj, important: obj.important == 'true' ? 'false' : 'true'}
                : obj
            )
        )
    }

    return (
        <>
            {clickedName.substring(0, 9) == 'Important' ? <div className={Styles.backgrounds}>
                <div className={Styles.innerBackground}>
                    <h2 className={`${Styles.h2} ${InputStyle.mainHeader}`}>Important</h2>
                    <div className={Styles.tasks}>
                        {importantTasks.map((element, index) => (
                            <div key={index} className={Styles.taskDivs}>{element.task}<span onClick={handleStarredValues}>{element.important == 'false' ? <FontAwesomeIcon icon={openStar} /> : <FontAwesomeIcon icon={solidStar} />}</span></div>
                        ))}
                    </div>
                    
                </div>
                <form className={Styles.form} id="taskForm" onSubmit={createNewDivs}>
                    <input name="task" placeholder="Add task" type="text" value={updatedText} onChange={e => changeText(e.currentTarget.value)} />
                    <input className={InputStyle.checkboxInput} name='important' type='checkbox' value={importance} onChange={handleCheckedInput} />
                    {/* CHECK THE CHECKBOX INPUT */}
                </form>
            </div> : null}
        </>
    )
}

export { Important }