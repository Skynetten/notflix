import TopRow from './component/TopRow';
import bng from './bng.jpg'
import { useEffect, useState } from 'react';
import Email from './component/Email';
import Background from './component/Background';

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

 

  return (
    <>
      <div className="container">
        <TopRow />
        <Background bng={bng}/>
      <Email users={users} />
      </div>
      
    </>
  );
}

export default App;
