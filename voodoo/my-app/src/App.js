import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroupComponents from './components/InputGroupComponents';
import PostCard from './components/PostCard';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
    const [data, setData] = useState([]);
    console.log(data);
    const [input, setInput] = useState('');


    const loadData = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
            );
            const dataRes = await response.json();

            const responseAutors = await fetch(
                'https://jsonplaceholder.typicode.com/users',
            );
            const autorsDate = await responseAutors.json();

            const dataWithAutors = dataRes.map(item => {
                const newItem = item;
                autorsDate.forEach(item2 => {
                    if (item.userId === item2.id) {
                        newItem.name = item2.name;
                    }
                });
                return newItem;
            });
            setData(dataWithAutors);
        } catch (error) {
            console.log(`Error is: ${error}`);
        }
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <>
            <InputGroupComponents onChange={text => setInput(text.target.value)} />

            <Container>
                <Row className="row gy-3">
                    {data?.filter((el) => {
                        return input.toLowerCase() === '' ? el : el.name.toLowerCase().includes(input)
                    }).map((el, i) => {
                            return (
                                <Col className="col-sm-4" key={`${i}`}>
                                    <PostCard
                                        title={el.title}
                                        body={el.body}
                                        name={el.name}
                                    />
                                </Col>
                            );
                        })
                        .slice(7, 13)}
                </Row>
            </Container>
        </>
    );
};

export default App;
