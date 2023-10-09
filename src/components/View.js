import React, { useState, useEffect } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'

function View() {
    const {id} = useParams()
    const navigate = useNavigate();
    const [Data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users'+id)
        .then((res)=>setData(res.data))
        .catch(err => console.log(err))
    },[])


  return (
    <div className='container'>
        {Data.map(d => (
            <div className='container p-5'>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.department}</p>
                <Link to='/'>Back</Link>

            </div>
        ))}
      
    </div>
  )
}

export default View
