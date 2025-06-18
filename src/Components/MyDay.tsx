import { useState } from "react"

type Props = {
    clickedName: string
    createNewDivTasks: (FormData: object) => void
    changeText: (e: string) => void
    updatedText: string
}

const MyDay: React.FunctionComponent<Props> = ( { clickedName, createNewDivTasks, changeText, updatedText } ) => {
    const [myDayTasks, setMyDayTasks] = useState<{ task?: string, date?: string }[]>([])

    const createNewDivs = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)

        e.preventDefault()
        const objectData = Object.fromEntries(formData.entries())
        setMyDayTasks(previous => [...previous, objectData])
        console.log('WOY1', formData, objectData, myDayTasks)
        createNewDivTasks(objectData)
        changeText('')
    }

    return (
        <>
        {console.log(clickedName == `<h3>My Day</h3>`)}
            {clickedName == `My Day` ? <div>
                <h2>My Day</h2>
                <h4>{new Date().toDateString()}</h4>
                <div className="task-div" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                    {myDayTasks.map((element, index) => (
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


export { MyDay }