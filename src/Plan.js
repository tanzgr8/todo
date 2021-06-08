import React ,{useState} from 'react'
import './plan.css';
export  default function Plan(props){
    const [check,setCheck]=useState(false);
    const toggleclass=()=>{
        setCheck(!check);
    }
    return <>
   <li className={check?"shadow p-2 my-2 col-9 check":"shadow p-2 my-2 col-9 "} onClick={toggleclass}>{props.todo}</li>
   <button className="ui inverted red mini button m-2 sm-2" onClick={()=>{props.delete(props.id)}}><i class="trash alternate icon"></i>DELETE</button>
    </>
}