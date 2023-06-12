import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MainCard.css';

function MainCard() {

    const [advice, setAdvice] = useState("");
    const [count, setcount] = useState(0);
    async function getAdvice() {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            console.log(response);
            setAdvice(response.data.slip.advice);
            setcount((c) => c + 1);
        } catch (error) {
            console.error(error);

        }
    }
    // async function getAdvice() {

    //     const res = await fetch("https://api.adviceslip.com/advice");
    //     const data = await res.json();
    //     setAdvice(data.slip.advice);
    //     setcount((c) => c + 1);

    // }

    useEffect(function () {
        getAdvice();

    }, [])
    return (
        <div className='container'>
            <Card className="card text-center">
                <Card.Header  >today's advice</Card.Header>
                <Card.Body >
                    <Card.Title >{advice}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="success" onClick={getAdvice}>Get Advice</Button>
                </Card.Body>
                <Card.Footer className="text-muted">you have read <strong>{count}</strong> pieces of advice<br></br>API © AdviceSlip.com</Card.Footer>
            </Card>
        </div>
    );
}



export default MainCard



