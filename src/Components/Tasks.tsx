type Props = {
    clickedName: string
}

const Tasks: React.FunctionComponent<Props> = ({ clickedName }) => {
    return (
        <>
            {clickedName == 'Tasks' ? <div>
                <h3>Tasks</h3>
            </div> : null}
        </>
        
    )
}

export { Tasks }