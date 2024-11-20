import { ChangeEvent, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { DepartmentDto } from "../../models/DepartmentDto";
import apiConnector from "../../api/apiConnector";
import { Button, Form, Segment } from "semantic-ui-react";

export default function DepartmentForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [department, setDepartment] = useState<DepartmentDto>({
        id: undefined,
        name: '',
        description: ''
    });

    useEffect(() => {
        if (id) {
            apiConnector.getDepartmentById(id).then(department => setDepartment(department!));
        }
    }, [id]);

    function handleSubmit() {
        console.log("On Submit: ", { department });
        if (department.id) {
            apiConnector.updateDepartment(department).then(() => navigate('/'));
        }
        else {
            apiConnector.createDepartment(department).then(() => navigate('/'));;
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setDepartment({ ...department, [name]: value });

    }
    return (
        <Segment clearing inverted>
            <Form onSubmit={handleSubmit} className="ui inverted form" autoComplete="off">
                <Form.Input placeholder="Name" name='name' value={department.name} onChange={handleInputChange} />
                <Form.TextArea placeholder="Description" name='description' value={department.description} onChange={handleInputChange} />
                <Button floated="right" positive type="submit" content="Submit" />
                <Button as={NavLink} to='/' floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
}