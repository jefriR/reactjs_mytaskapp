import './App.css';
import { Button, Container, Row, Col, Form} from 'react-bootstrap';
import { MdDelete, MdAddCircle } from "react-icons/md";
import {useState, useRef, useEffect } from 'react';


const myTasks = [
  { id : 1, name : "First Task" },
] 

const Header = ({count}) => {
  return <>
   <h1>My Task Application</h1>
   <h5>You have {count} tasks to do!</h5>
  </>
}

const FormTask = ({setTask, tasks}) => {
  const [temp, setTemp] = useState('')

  const taskName = event => {
    setTemp(event.target.value)
  }

  const inputRef = useRef(null);

  useEffect(() => {
      inputRef.current.focus();
  });

  const addTask = () => {
    const newTask = {
      id : tasks.length + 1,
      name : temp
    }
    setTask([...tasks, newTask])
    setTemp('')
  }

  return  <Form>
            <Row>
              <Col md={7}>
                <Form.Control placeholder="Enter task name" className="mt-2" autoFocus onChange={taskName} value={temp}  ref={inputRef}/>
              </Col>
              <Col md={5}>
                <Button type="button" variant="primary" className="pl-5 pr-5 btn-block mt-2" onClick={addTask} disabled={temp === ''}>Add Task <MdAddCircle/></Button>
              </Col>
            </Row>
          </Form>
}

const ListTask = ({setTask, tasks}) => {
  const deleteTask = (index) => {
    const name = index.target.getAttribute('name')
      setTask(tasks.filter(item => item.name !== name))
  }

  return tasks.map((task, i) => (
    <div className="list-groups" key={i}>
      <div className="list-group-left">{task.name}</div>
      <div className="list-group-right">
        <Button type="button" variant="outline-danger" name={task.name} onClick={deleteTask}>Delete<MdDelete/> </Button>
      </div>
    </div>
  ))                   
}

const TaskApplication = () => {
  const [tasks, setTask] = useState(myTasks)

  return  <Container className="pt-5" >
            <Row className="justify-content-center">
              <Col md={10} className="borderPrimary">
                <Row>
                  <Col>
                    <Header count={tasks.length}/>
                  </Col>
                </Row>    

                <Row className="mt-1 justify-content-center">
                  <Col md={8}>
                    <FormTask setTask={setTask} tasks={tasks}/>
                  </Col>
                </Row>

                <Row className="mt-3 mb-5 justify-content-center">
                  <Col md={8} className="text-dark">
                    <ListTask  setTask={setTask} tasks={tasks}/>
                  </Col>
                </Row>
              </Col>
            </Row>
            
          </Container>
        

}

function App() {
  return (
    <div className="App App-header">
      <TaskApplication />
    </div>
  );
}

export default App;
