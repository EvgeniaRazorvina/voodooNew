import React from 'react';
import { Card } from 'react-bootstrap';
import './postCard.css';

const PostCard = props => {
    return (
        <>
            <Card className="card">
                <Card.Body className="cardBody">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.body}</Card.Text>
                    <Card.Text className="nameAutor">{props.name}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default PostCard;
