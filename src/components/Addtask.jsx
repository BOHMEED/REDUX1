import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../slices/taskslice'

const Addtask = () => {
    const [newtask, setnewtask] = useState({
        id:0,
        description:"",
        isDone:false
    })
    const dispatch=useDispatch()
    return (
    <div className='addtask'>
        <input type="text" placeholder='Put your task here ...' onChange={(e)=>setnewtask({...newtask,description:e.target.value,id:Math.random()*100})} />
        <button onClick={()=>dispatch(addtask(newtask))} >Add</button>
    </div>
    )
}

export default Addtask
