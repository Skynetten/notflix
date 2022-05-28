import axios from 'axios'; 


// set default middlewares (logger, static, cors and no-cache)
const UsersPost = async (data)=>{
    const res = await axios.post('http://localhost:5000/users',data);
    console.log(res)
}

export default UsersPost;