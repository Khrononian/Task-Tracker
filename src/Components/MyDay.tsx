type Props = {
    clickedName: string
}

const MyDay: React.FunctionComponent<Props> = ( {clickedName} ) => {
    return (
        <>
        {console.log(clickedName == `<h3>My Day</h3>`)}
            {clickedName == `My Day` ? <div>
                <h2>My Day</h2>
                <h4>{new Date().toDateString()}</h4>
                <input placeholder="Add task"/>
            </div> : null}
            
        </>
    )
}

// export function MyDay ({ changeMainPage } ) {
//     return (
//         <div>
//             <div style={{ background: 'red' }} onClick={changeMainPage}>
//                 {/* ICON HERE */}
//                 <h3>My Day</h3>
//                 {/* HAVE NUMBER AT END */}
//             </div>
//         </div>
//     )
// }


export { MyDay }