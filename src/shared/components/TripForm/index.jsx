import React, { useState } from 'react'
import DisplayData from '../DisplayData';

function TripForm () {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    nEmployeeId: null,
    sEmailId: '',
    nContact: null,
    eDepartment: '',
    isComing: ''
  })
  const [tableData, setTableData] = useState([])
  function handleOnSubmit (e) {
    e.preventDefault()

    if (tableData?.length) {
      setTableData([...tableData, formData])
    } else {
      setTableData([formData])
    }
    console.log('first')
  }
  console.log('tableData', tableData)
  function handleOnChange (e) {
    const newInput = (data) => ({ ...data, [e.target.name]: e.target.value })
    setFormData(newInput)
  }
  return (
    <>
      <form onSubmit={(e, data) => handleOnSubmit(e, data)}>
        <div className='row mt-3'>
          <div className="col form-group">
            <label for="fName">First Name</label>
            <input type="text" className="form-control mt-1" id="fName" placeholder="Enter your name" onChange={(e) => handleOnChange(e)} value={formData.fName} name="fName" required />
          </div>

          <div className="col form-group">
            <label for="lName">Last Name</label>
            <input type="text" className="form-control mt-1" id="lName" placeholder="Enter your surname" onChange={(e) => handleOnChange(e)} value={formData.lName} name="lName" required />
          </div>
        </div>

        <div className='row mt-2'>
          <div className="col form-group">
            <label for="nEmployeeId">Employee ID</label>
            <input type="number" className="form-control mt-1" id="nEmployeeId" placeholder="eg: 1947" onChange={(e) => handleOnChange(e)} value={formData.nEmployeeId} name="nEmployeeId" required />
          </div>

          <div className="col form-group">
            <label for="sEmailId">Email ID</label>
            <input type="email" className="form-control mt-1" id="sEmailId" placeholder="eg: example@gmail.com" onChange={(e) => handleOnChange(e)} value={formData.sEmailId} name="sEmailId" required />
          </div>
        </div>

        <div className='row mt-2'>
          <div className="col form-group">
            <label for="nContact">Contact Number</label>
            <input type="number" className="form-control mt-1" id="nContact" placeholder="eg: 9876543210" onChange={(e) => handleOnChange(e)} value={formData.nContact} name="nContact" required />
          </div>

          <div className="col form-group">
            <label for="eDepartment">Department</label>
            <select class="form-control mt-1" id="eDepartment" onChange={(e) => handleOnChange(e)} value={formData.eDepartment} name="eDepartment" required >
              <option selected>Select your Department</option>
              <option value='Web Development'>Web Development</option>
              <option value='Game Development'>Game Development</option>
              <option value='DevOps'>DevOps</option>
              <option value='Web Designer'>Web Designer</option>
            </select>
          </div>
        </div>

        <div className='row mt-2'>
          <div className="col form-group">
            <label for="isComing">Would you like to join with us?</label>
            <select class="form-control mt-1" id="isComing" onChange={(e) => handleOnChange(e)} value={formData.isComing} name="isComing" required >
              <option selected value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>

          <div className='col'></div>
        </div>

        <div className='row mt-3'>
          <div className='col'>
            <button className='btn btn-sm btn-dark' type='submit'>Save</button>
          </div>
        </div>
      </form>
      <table className='table table-hover mt-3'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email ID</th>
            <th>Contact Number</th>
            <th>Department</th>
            <th>isComing</th>
          </tr>
        </thead>
        {tableData?.map((item) => {
          return (
            <DisplayData data={item} />
          )
        })}
      </table>
    </>
  )
}

export default TripForm 
