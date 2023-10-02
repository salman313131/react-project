import { useState } from "react"
import InputField from "./Components/InputField"
import List from "./Components/List"
function App() {
  const [userList,setUserList] = useState([])
  const addUser=(data)=>{
      setUserList((prevUser)=>{
        return [data,...prevUser]
      })
  }
  return (
    <div>
      <InputField dataHandler={addUser}></InputField>
      <List userdata={userList}></List>
    </div>
  )
}

export default App
