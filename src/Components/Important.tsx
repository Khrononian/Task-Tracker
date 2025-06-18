import { useState } from "react"


type Props = {
    clickedName: string
    createNewDivTasks: (FormData: object) => void
    changeText: (e: string) => void
    updatedText: string
}

const Important: React.FunctionComponent<Props> = ({ clickedName, createNewDivTasks, changeText, updatedText }) => {
    const [importantTasks, setImportantTasks] = useState<{ task?: number, importance?: boolean }[]>([])
    const [importance, setImportance] = useState('false')

    const createNewDivs = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)
        const objectData = Object.fromEntries(formData.entries())
        
        e.preventDefault()
        
        setImportantTasks(previous => [...previous, objectData])
        console.log('WOY1', formData, objectData, importantTasks)
        createNewDivTasks(objectData)
        changeText('')
    }

    return (
        <>
            {clickedName == 'Important' ? <div>
                <h2>Important</h2>
                <div className="task-div">
                    {importantTasks.map((element, index) => (
                        <div key={index}>{element.task}<span>{element.importance}</span></div>
                    ))}
                </div>
                <form id="taskForm" onSubmit={createNewDivs}>
                    <input name="task" placeholder="Add task" type="text" value={updatedText} onChange={e => changeText(e.currentTarget.value)} />
                    <input name='important' type='checkbox' value={importance} />
                    {/* CHECK THE CHECKBOX INPUT */}
                </form>
            </div> : null}
        </>
        
    )
}

export { Important }