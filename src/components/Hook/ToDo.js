import { useState } from "react"

function ToDo(){
    const [todo, setTodo] = useState('')
    const [warning, setWarning] = useState(null)

const handleInput =(e)=>{
    const inputvalue = e.target.value;
    const updateWarning = inputvalue.includes('.js')
    ? ' You need JS Skill' : null;

    setTodo(inputvalue)
    setWarning(updateWarning)

}
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea onChange={handleInput}></textarea>
            </p>
            <h2>{warning || "Good Choise"}</h2>
        </div>
    )
}
export default ToDo;