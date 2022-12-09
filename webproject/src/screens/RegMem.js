import { Component } from "react";
import Form, { Button } from "react-bootstrap";
import Axios from "axios";



class RegMem extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formInputName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control placeholder="이름을 입력하세요." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Disabled select menu</Form.Label>
                        <Form.Select disabled>
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicIntro">
                        <Form.Label>자기소개</Form.Label>
                        <Form.Control as = "textarea" rows={3} placeholder="자기 소개" />
                    </Form.Group>

                    <Button type="submit" variant="info">완료</Button>
                </Form>
            </div>
        )
    }
}

export default RegMem;