import React ,{useState}from "react";
import Plan from './Plan'
import { Add,Delete } from "./action/index";
import {useSelector,useDispatch} from 'react-redux';

export default function Task() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const list =useSelector((state)=>state.todoReducers.list);
//     const [todos, setTodos] = useState([]);
//     useEffect(() => {
//       // get from local
//       const getLocalTodos = () => {
//           if (localStorage.getItem("todos") === null) {
//               localStorage.setItem("todos", JSON.stringify([]));
//           }
//           else {
//               let todoLocal = JSON.parse(localStorage.getItem("todos"));
//               setTodos(todoLocal);
//               console.log(todoLocal);
//           }
//       };
      
//       getLocalTodos();
     
//   }, []);
//   useEffect(()=>{
// // save to local
// const saveLocalTodos = () => {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }; saveLocalTodos();
//   },[todos]);
//     const handleChange = (event) => {
//        setInputText(event.target.value);
//    };
//    const AddTodo =(e)=>{
//      if(inputText!==""){
//        const items =[...todos, inputText];
//        setTodos(items);
//        setInputText("");
//       }
//    }
//    const handleDelete=(id)=>{
//     //  console.log("Delete" + id);
//     const old =[...todos ];
//     const newtodo= old.filter((element,i)=>{
//       return i!==id
//     })
//     setTodos(newtodo);
//    }
  return (
    <React.Fragment>
      <div className="container-fluid my-5 text-white ">
        <div className="row">
          <div className="col-sm-6 mx-auto shadow p-3 rounded">
            <h1 className="text-center">TODO</h1>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control"placeholder="Add Your TODO Here"  value={inputText }onChange={(e)=>{setInputText(e.target.value)}}/>
                </div>
                <div className="col-2">
                  <button className="ui inverted blue small button" onClick={()=>{dispatch(Add(inputText),setInputText(""))}}><i class="plus icon"></i> ADD</button>
                </div>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {
                    list.map((value)=>{
                     return <Plan key={value.id} id={value.id}  todo={value.data} delete={()=>dispatch(Delete(value.id))}/>
                    })
                  }
                </ul>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
