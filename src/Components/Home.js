import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

const Home = () => (
    <Jumbotron>
        <h1>Welcome to <strong>Code Note</strong></h1>
        <p>The place to save all your code notes</p>
       <p>
       <Button
        variant="primary"
        size='lg'
        >Sign up</Button>
       </p>
    </Jumbotron>
)

export default Home;