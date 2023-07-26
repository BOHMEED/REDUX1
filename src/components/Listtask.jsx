import React, { useState } from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

const Listtask = () => {
    const taskss=useSelector(state=>state.taskslice.tasks)
    const [index, setindex] = useState(0)
    return (
    <div className='tasklist'>
        <div className="buttons">
            <button onClick={()=>setindex(0)} >All</button>
            <button onClick={()=>setindex(1)} >Done</button>
            <button onClick={()=>setindex(2)} >Undone</button>
        </div>
        {index===0?taskss.map(el=><Task key={el.id} el={el} />):index===1?taskss.filter(el=>el.isDone===true).map(el=><Task key={el.id} el={el} />):taskss.filter(el=>el.isDone===false).map(el=><Task key={el.id} el={el} />)}
    </div>
    )
}

export default Listtask
