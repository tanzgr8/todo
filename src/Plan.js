import React from 'react'
export  default function Plan(props){
    return <>
   <li className="shadow p-2 my-2 col-9 ">{props.todo}</li>
   <button className="ui inverted red mini button m-2 sm-2" onClick={()=>{props.delete(props.id)}}><i class="trash alternate icon"></i>DELETE</button>
    </>
}