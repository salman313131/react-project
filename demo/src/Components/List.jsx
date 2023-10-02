const List=(props)=>{
    return(
        <div>
            {props.userdata.map(item=><li>{item.username} {item.age}</li>)}
        </div>
    )
}
export default List