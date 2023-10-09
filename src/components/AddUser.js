import React, { useState } from 'react'

function AddUser() {
    const [inputData, setInputData] = useState({
        name: '', 
        email: '', 
        deparetment:''
    })

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users',inputData)
        .then(res =>{
            alert("Data posted Successfully")
            navigate('/')
        })
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-item-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e =>setInputData({...prevState , name : e.target.value})} />

                </div>
                <div>
                    <label htmlFor="name">Last Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e =>setInputData({...prevState , name : e.target.value})} />
                                        
                </div>
                <div>
                    <label htmlFor="name">Email:</label>
                    <input type="email" name='email' className='form-control'
                    onChange={e =>setInputData({...prevState , email : e.target.value})} />

                </div>
                <div>
                    <label htmlFor="name">Department:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e =>setInputData({...prevState , name : e.target.value})} />

                </div><br/>
                <button type="submit" className='btn btn-primary mt-3 float-right'>Submit</button>
                
            </form>

        </div>
      
    </div>
  )
}

export default AddUser
