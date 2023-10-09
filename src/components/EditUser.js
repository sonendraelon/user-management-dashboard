import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditUser() {

    const {id} = useParams();


    const [inputData, setInputData] = useState({
        id: id,
        name: '', 
        email: '', 
        deparetment:''
    })

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users'+id)
        .then((res)=>setInputData(res.data))
        .catch(err => console.log(err))
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/users'+id,inputData)
        .then(res =>{
            alert("Data updated Successfully")
            navigate('/')
        })
    }



  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="number" disabled name='id' className='form-control' value={inputData.id}/>
            </div>
            <div>
                <label htmlFor="name">First Name:</label>
                <input type="text" name='name' className='form-control' value={data.name}
                onChange={e =>setInputData({...prevState , name : e.target.value})} />

            </div>
            <div>
                <label htmlFor="name">Last Name:</label>
                <input type="text" name='name' className='form-control' value={data.name}
                onChange={e =>setInputData({...prevState , name : e.target.value})} />
                                    
            </div>
            <div>
                <label htmlFor="name">Email:</label>
                <input type="email" name='email' className='form-control' value={data.email}
                onChange={e =>setInputData({...prevState , email : e.target.value})} />

            </div>
            <div>
                <label htmlFor="name">Department:</label>
                <input type="text" name='name' className='form-control' value={data.name}
                onChange={e =>setInputData({...prevState , name : e.target.value})} />

            </div><br/>
            <button type="submit" className='btn btn-primary mt-3 float-right'>Edit</button>
            
        </form>

    </div>
  
</div>
  )
}

export default EditUser
