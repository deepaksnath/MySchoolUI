import { useEffect, useState } from "react"
import apiConnector from "../../api/apiConnector";
import { DepartmentDto } from "../../models/DepartmentDto";
import { Container, Button } from "semantic-ui-react";
import DepartmentTableItem from "./DepartmentTableItem";
import { NavLink } from "react-router-dom";
   

export default function DepartmentTable(){    
    const [departments, setDepartments] = useState<DepartmentDto[]>([]);  
    useEffect(()=>{
        const fetchData =async()=>{
            const fetchedDepartments = await apiConnector.getDepartments();
            setDepartments(fetchedDepartments);
        }
        fetchData();
        console.log("departments:", {departments});
    },[]);

    return(
        <>
        <Container className="container-style">
            <table className="ui inverted table">
                    <tr style={{textAlign:"center"}}>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    {
                        departments.length !== 0 && (
                            departments.map((department, index) => (
                                <DepartmentTableItem key={index} department={department}/>
                            ))                     
                        )
                    }
            </table>
            <Button as={NavLink} to="createDepartment" floated="right" content="Create Department" type="button" positive />
        </Container>
        </>
    )
}