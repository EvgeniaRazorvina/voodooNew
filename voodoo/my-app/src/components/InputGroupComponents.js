import React, { useState } from "react";
import { InputGroup, Button, Form, Row, Container } from "react-bootstrap";
import search from "./search.png";
import styled from "styled-components";



const Styles = styled.div`
    .mb-3{
        width: 50%;
    }
`
const InputGroupComponents = () => {
    const [nameAutor, setNameAutor] = useState('');
    return(
        <>
        <Styles>
            <Container>
                <Row className="row justify-content-md-center my-3">
                <InputGroup className="mb-3" >
                <Button variant="outline-secondary" id="button-addon1">
                    <img
                        className="d-block w-80"
                        src={search}
                        alt="search"
                    />
                </Button>
                <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="Filter by author"
                    onChange={setNameAutor}
                />
            </InputGroup>
                </Row>
            </Container>

            </Styles>
       </>
    )
}
export default InputGroupComponents;