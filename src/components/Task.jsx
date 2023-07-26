import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edittask } from '../slices/taskslice'

const Task = ({el}) => {
    const [showedit, setshowedit] = useState(false)
    const [newdescrip, setnewdescrip] = useState("")
    const dispatch=useDispatch()
    return (
    <div className='task'>
        
        <h1  className={el.isDone?"done":null} >{el.description} </h1>
        <button onClick={()=>{setshowedit(!showedit);dispatch(edittask({id: el.id, task:{...el,description:newdescrip}}))}} > {(showedit)?"Confirm":"Edit"} </button>
        {(showedit)?<input type="text" placeholder='Modifie your to do ...' id='' onChange={(e)=>setnewdescrip(e.target.value)} />:null}
        
    </div>
    )
}

export default Task
