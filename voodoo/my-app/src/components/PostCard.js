import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './postCard.css';

const PostCard = () => {
    const [data, setData] = useState([]);
    const filtred = 'Lea';

    const loadData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const dataRes = await response.json();

            const responseAutors = await fetch('https://jsonplaceholder.typicode.com/users');
            const autorsDate = await responseAutors.json();

            const dataWithAutors = dataRes.map((item) => {
                const newItem = item;
                autorsDate.forEach((item2) => {
                  if (item.userId === item2.id) {
                    newItem.name = item2.name;
                  }
                });
                return newItem; 
              });
              const dataFiltred = dataWithAutors.filter((el) => el.name.includes(filtred));
              setData(dataFiltred);



        } catch(error) {
            console.log(`Error is: ${error}`);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <>
            <Container>
                <Row className='row gy-3'>
                {data?.map((el,i) => {
                    return(
                        <Col className='col-sm-4' key={`${i}`}>
                        <Card className='card'>
                            <Card.Body className='cardBody'>
                                <Card.Title>{el.title}</Card.Title> 
                                <Card.Text>{el.body}</Card.Text>   
                                <Card.Text className='nameAutor'>{el.name}</Card.Text>                        
                            </Card.Body>
                        </Card>
                    </Col>
                    )}).slice(7,13)}
                </Row>

            </Container>
        </>    
    )
}

export default PostCard;