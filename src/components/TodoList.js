import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup'
import { BiX, BiChevronUp, BiChevronDown } from "react-icons/bi";


const TodoList = (props) => {
    //todoList

    if (props.todoList.length === 0) {
        return <p>Awaiting the first item...</p>
    }

    return (
        <ListGroup>
            {props.todoList.map(item => {
                console.log(item);
                return (
                    <ListGroup.Item key={item.title} className="todo container">
                        <div className='row'>
                            <div className='todoTitle col-10'>{item.title}</div>
                            <div className='reorderButtons col-1'>
                                <ListGroup horizontal>
                                    <ListGroup.Item onClick={() => props.reorderToDos(item.title, "down")}><BiChevronDown></BiChevronDown></ListGroup.Item>
                                    <ListGroup.Item onClick={() => props.reorderToDos(item.title, "up")}><BiChevronUp></BiChevronUp></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className='removeButton col-1'><BiX size={35} color="black" onClick={() => props.removeToDo(item.title)}></BiX></div>
                        </div>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>);
}

export default TodoList;