import './App.css';
import { Button, Container, Row, Col, Form} from 'react-bootstrap';
import {useState, useEffect} from 'react';


const Task = () => {
  const [tasks, setTask] = useState(['First Task'])
  const [temp, setTemp] = useState('')

  useEffect(() => {
    console.log('useeffect')
  })

  const taskName = event => {
    setTemp(event.target.value)
  }

  const addTask = () => {
    setTask([...tasks, temp])
    setTemp('')

  }

  const deleteTask = (index) => {
    const name = index.target.getAttribute('name')
    setTask(tasks.filter(item => item !== name))
  
  }

  return  <Container className="pt-5" >
            <Row className="justify-content-center">
              <Col md={10} className="borderPrimary">
                <Row>
                  <Col>
                    <h1>My Task Application</h1>
                    <h5>You have {tasks.length} tasks to do!</h5>
                  </Col>
                </Row>    

                <Row className="mt-1 justify-content-center">
                  <Col md={8}>
                    <Form>
                      <Row>
                        <Col md={7}>
                          <Form.Control placeholder="Enter task name" className="mt-2" autoFocus onChange={taskName} value={temp}/>
                        </Col>
                        <Col md={5}>
                          <Button type="button" variant="primary" className="pl-5 pr-5 btn-block mt-2" onClick={addTask}>Add Task</Button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>

                <Row className="mt-3 mb-5 justify-content-center">
                  <Col md={8} className="text-dark">
                    {tasks.map((task, i) => (
                      <div className="list-groups" key={i}>
                        <div className="list-group-left">{task}</div>
                        <div className="list-group-right">
                          <Button type="button" variant="outline-danger" name={task} onClick={deleteTask} >Delete</Button>
                        </div>
                      </div>
                    ))}                    
                  </Col>
                </Row>
              </Col>
            </Row>
            
          </Container>
        

}

function App() {
  return (
    <div className="App App-header">
      <Task />
    </div>
  );
}

export default App;
