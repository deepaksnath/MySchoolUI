import axios, { AxiosResponse } from "axios";
import { DepartmentDto } from "../models/DepartmentDto";
import { GetDepartmentByIdResponse } from "../models/getDepartmentByIdResponse";
import { BASE_API_URL } from "../components/departments/config";

const apiConnector ={

    getDepartments: async(): Promise<DepartmentDto[]> => {
        try{
            const response = await axios.get(`${BASE_API_URL}/department`).then(res => res.data);            
            const deparments = response.map( (department:DepartmentDto) => ({
                id: department.id,
                name: department.name,
                description: department.description
            }));
            
            return deparments;
        }
        catch(error){
            console.log('Error fetching departments:', error);
            throw error;
        }
    },      

    getDepartmentById: async(id: string): Promise<GetDepartmentByIdResponse | undefined> => {
        try{            
            const response: AxiosResponse<GetDepartmentByIdResponse> = await axios.get(`${BASE_API_URL}/department/${id}`); 
            return response.data;
        }
        catch(error){
            console.log('Error fetching department:', error);
            throw error;
        }   

    },

    createDepartment: async(department: DepartmentDto): Promise<void> => {
        try{
            await axios.post<number>(`${BASE_API_URL}/department`, department);
        }
        catch(error){
            console.log('Error creating department:', error);
            throw error;
        }   

    },

    updateDepartment: async(department: DepartmentDto): Promise<void> => {
        try{
            await axios.put<number>(`${BASE_API_URL}/department`, department);
        }
        catch(error){
            console.log('Error updating department:', error);
            throw error;
        }   

    },

    deleteDepartment: async(id: string): Promise<void> => {
        try{
            await axios.delete<number>(`${BASE_API_URL}/department/${id}`);
        }
        catch(error){
            console.log('Error deleting department:', error);
            throw error;
        }   

    }
}

export default apiConnector;