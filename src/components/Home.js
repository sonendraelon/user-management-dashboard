import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Home() {
    const [data, setData] = useState([])
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

  return (
    <div className='container mt-5'>
        <h2>User Management Dashboard</h2>
        <Link to='/add' className='btn btn-success my-3'> Add </Link>
        <table className='table'>
            <thead> 
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data,item) =>(
                    <tr key={item}>
                        <td>{data._id}</td>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.email}</td>
                        <td>{data.department}</td>
                        <td>
                            <Link className = 'text-decoration-none btn btn-sm btn-success' to={`/edit/${data.id}`}>Edit</Link>
                            <button className = 'text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(data.id)}>Delete</button>
                            <Link className = 'text-decoration-none btn btn-sm btn-success' to={`/view/${data.id}`}>View</Link>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
      
    </div>

    
  )
  function handleDelete(id){
    axios.delete('http://localhost:3000/users'+id)
    .then(res => {
        alert("Record Deleted")
        navigate('/')
    })
}
}

export default Home
