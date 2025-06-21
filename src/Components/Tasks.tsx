import { useState } from "react"

type Props = {
    clickedName: string
    createNewDivTasks: (FormData: object) => void
    changeText: (e: string) => void
    updatedText: string
}

const Tasks: React.FunctionComponent<Props> = ({ clickedName, createNewDivTasks, changeText, updatedText }) => {
    const [randomTasks, setRandomTasks] = useState<{ task?: string, date?: string }[]>([])
    
    const createNewDivs = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)

        e.preventDefault()
        const objectData = Object.fromEntries(formData.entries())
        setRandomTasks(previous => [...previous, objectData])
        console.log('WOY1', formData, objectData, )
        createNewDivTasks(objectData)
        changeText('')
    }

    return (
        <>
            {clickedName == 'Tasks' ? <div>
                <h2>Tasks</h2>

                <div>
                    {randomTasks.map((element, index) => (
                        <div key={index}>{element.task}<span>{element.date}</span></div>
                    ))}
                </div>
                <form id="taskForm" onSubmit={createNewDivs}>
                    <input name="task" placeholder="Add task" type="text" value={updatedText} onChange={e => changeText(e.currentTarget.value)} />
                    <input name='date' type="date" value={`2025-06-17`}/>
                </form>
            </div> : null}
        </>
        
    )
}

export { Tasks }