import { Button } from "semantic-ui-react"
import { DepartmentDto } from "../../models/DepartmentDto"
import apiConnector from "../../api/apiConnector"
import { NavLink } from "react-router-dom"

interface Props{
    department : DepartmentDto
}

export default function DepartmentTableItem({department}:Props){   
    return(
        <>
        <tr style={{textAlign:"center"}}>
            <td data-label="Name">{ department.name }</td>
            <td data-label="Description">{ department.description }</td>
            <td>
                <Button as={NavLink} to={`editDepartment/${department.id}`}  color="yellow" type="submit">Edit</Button>
                <Button negative onClick={
                    async()=>{
                        await apiConnector.deleteDepartment(department.id!);
                        window.location.reload();
                    }
                }>Delete</Button>
            </td>
        </tr>
        </>
    )
}