import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Logan Ponik - UD CISC275 with React Hooks and TypeScript
            </header>
            {/* Add a header*/}
            <h1>This is a header</h1>
            {/* Add an image with alt text*/}
            <div>
                <p>
                    <br></br>
                    Picture of a dog
                </p>

                <img
                    src={require("/Users/loganponik/tasks/src/images/dog.jpeg")}
                    alt="A picture of a dog"
                ></img>
            </div>
            {/* Add a list with at least 3 elements*/}
            <div>
                <br></br>
                Unordered List:
                <ul>
                    <li> First </li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
            </div>
            <div>
                This is <span style={{ color: "red" }}>colored text</span>.
            </div>
            {/* Add a bootstrap button with the text Log Hello World 
            and make the button log "Hello World! when clicked */}
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            {/* Change backround color of header area, (changed to green through the .css file) */}
            {/* Have a two column layout, put a red filled rectangle in each column using a div tag with
            width, height, and backroundColor styles.) */}
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div
                                style={{
                                    width: "300px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Second column.
                            <div
                                style={{
                                    width: "300px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
