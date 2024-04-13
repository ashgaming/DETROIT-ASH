import './App.css';
import { Container, Form,Row } from 'react-bootstrap'
import { useState } from 'react'

function App() {
  const [name, setname] = useState([])
  return (
    <div className="App App-header">
          <Container>
            <Form>
              <h1>{name}</h1>
            <Row className='justify-content-md-center'>
              <Form.Group controlId='text'>
                <Form.Label>Enter Name</Form.Label><br />
                <Form.Control type='text'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
            </Row >
            </Form>
          </Container>
    </div>
  );
}

export default App;
