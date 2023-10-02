import { useState } from 'react'
import './InputField.css'
const InputField=(props)=>{
    const [username,setUsername] = useState('')
    const [age,setAge] = useState('')
    const usernameInput=(e)=>{
        setUsername(e.target.value)
    }
    const ageInput=(e)=>{
        setAge(e.target.value)
    }
    const submitForm=()=>{
        const data={username:username,age:age}
        props.dataHandle(data)
        setUsername('')
        setAge('')
    }
    return(
        <div className="input-field">
            <div>
                <label className="input-field_username__label">UserName</label>
                <input type='text' value={username} className="input-field_username__text" onChange={usernameInput}></input>
            </div>
            <div>
                <lable className="input-field_age__label">Age (Years)</lable>
                <input type='number' value={age} className="input-field_age__text" onChange={ageInput}></input>
            </div>
            <div>
                <button className="input-field_button" onClick={submitForm}>Add User</button>
            </div>
        </div>
    )
}
export default InputField