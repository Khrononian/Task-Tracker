import { useState } from "react"


type Props = {
    clickedName: string
    createNewDivTasks: (FormData: object) => void
    changeText: (e: string) => void
    updatedText: string
}

const Projects: React.FunctionComponent<Props> = ({ clickedName, createNewDivTasks, changeText, updatedText }) => {
    const [projectTasks, setProjectTasks] = useState<{ task?: string, date?: string }[]>([])
    
    const createNewDivs = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)

        e.preventDefault()
        const objectData = Object.fromEntries(formData.entries())
        setProjectTasks(previous => [...previous, objectData])
        console.log('WOY1', formData, objectData, projectTasks)
        createNewDivTasks(objectData)
        changeText('')
    }

    return (
        <>
            {clickedName == 'Projects' ? <div>
                <h2>Projects</h2>

                <div>
                    {projectTasks.map((element, index) => (
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

export { Projects }