import TopRow from './component/TopRow';
import bng from './bng.jpg'
import { useEffect, useState } from 'react';
import Email from './component/Email';
import Background from './component/Background';
import styled from 'styled-components';

function App() {
  const [currentSignUp,setSignUp] = useState();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async ()=>{
      const temp = await fetch("http://localhost:5000/users");
      const res = await temp.json();
      setUsers(users => [res, ...users]);
    }
    getUsers();
  }, [])


const Bottom = styled.div`
  content: '';
  width: 100%;
  height: 100%;
  background-color: darkgray;
`

  return (
    <>
      <div className="container">
        <TopRow />
        <Background bng={bng}/>
        <Email users={users} />
      </div>
      <Bottom/> 
           
    </>
  );
}

export default App;
