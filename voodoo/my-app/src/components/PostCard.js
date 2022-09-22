import { Card } from "bootstrap-4-react/lib/components";
import { Col, Container, Row } from "bootstrap-4-react/lib/components/layout";
import React, { useState, useEffect } from "react";
import './postCard.css';

const PostCard = () => {
    const [data, setData] = useState([]);
    const [autors, setAutors] = useState([]);

    const loadData = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const dataRes = await response.json();
            setData(dataRes);

            const responseAutors = await fetch('https://jsonplaceholder.typicode.com/users');
            const autorsDate = await responseAutors.json();
            setAutors(autorsDate);
        } catch(error) {
            console.log(`Error is: ${error}`);
        }
    }

    const result = data.map((item) => {
        const newItem = item;
        autors.forEach((item2) => {
          if (item.userId === item2.id) {
            newItem.name = item2.name;
          }
        });
        return newItem; 
      });


    useEffect(() => {
        loadData();
    }, []);

    return(
        <>
            <Container>
                <Row className="row gy-3">
                {result?.map((el,i) => {
                    return(
                        <Col className='col-sm-4'>
                        <Card className='card'  key={`${i}`}>
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