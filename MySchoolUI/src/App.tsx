
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import DepartmentTable from './components/departments/DepartmentTable'
import { Container } from 'semantic-ui-react';

function App() {
  const location = useLocation();

  return (
    <>
    {
      location.pathname === '/' ? 
      <DepartmentTable/> : 
      (
        <Container className='container-style'>
          <Outlet />
        </Container>
      )
    }
    </>
  )
}

export default App
