import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import CommonInput from '../CommonInput/index'
import Form from 'react-bootstrap/Form'
import { DataGrid } from '@mui/x-data-grid'

function TripForm () {
  const { control, formState: { errors }, handleSubmit, setError, clearErrors, reset } = useForm()

  const [tableData, setTableData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [search, setSearch] = useState('')

  function onSubmit (data) {
    const submitData = { ...data, id: tableData?.length + 1 }
    setTableData((prev) => [...prev, submitData])
    reset({
      fName: '',
      lName: '',
      nEmployeeId: '',
      sEmailId: '',
      nContact: '',
      eDepartment: '',
      isComing: ''
    })
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'fName', headerName: 'First Name', width: 130 },
    { field: 'lName', headerName: 'Last Name', width: 130 },
    { field: 'nEmployeeId', headerName: 'Employee ID', width: 100 },
    { field: 'sEmailId', headerName: 'Email ID', width: 200 },
    { field: 'nContact', headerName: 'Contact No.', width: 120 },
    { field: 'eDepartment', headerName: 'Department', width: 180 },
    { field: 'isComing', headerName: 'Coming?', width: 100 }
  ]

  function handleSearch (e) {
    e.preventDefault()
    setSearch(e.target?.value)

    const searchedData = tableData?.filter((item) => item?.fName.toLowerCase().includes(search))
    setSearchedData(searchedData)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='p-3 pt-0'>
        <div className='row mt-3'>
          <div className="col form-group">
            <Controller
              name='fName'
              control={control}
              rules={{
                required: 'First Name is required.'
              }}
              render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
                <CommonInput
                  ref={ref}
                  onChange={(e) => {
                    onChange(e)
                  }}
                  value={value}
                  id='fName'
                  type='text'
                  isRequired={true}
                  label='First Name'
                  placeholder='Enter your Name'
                  errorMessage={errors.fName?.message}
                />
              )}
            />
          </div>

          <div className="col form-group">
            <Controller
              name='lName'
              control={control}
              rules={{
                required: 'Last Name is required.'
              }}
              render={({ field, fieldState: { error } }) => (
                <CommonInput
                  {...field}
                  id='lName'
                  type='text'
                  isRequired={true}
                  label='Last Name'
                  placeholder='Enter your Surname'
                  errorMessage={errors.lName?.message}
                />
              )}
            />
          </div>
        </div>

        <div className='row mt-2'>
          <div className="col form-group">
            <Controller
              name='nEmployeeId'
              control={control}
              rules={{
                required: 'Employee ID is required.'
              }}
              render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
                <CommonInput
                  ref={ref}
                  onChange={(e) => {
                    const inputValue = e?.target?.value
                    const isInputValid = /^\d*$/.test(inputValue)

                    if (!isInputValid) {
                      setError('nEmployeeId', {
                        type: 'manual',
                        message: 'Employee ID must contain only digits.'
                      })
                    } else {
                      if (isInputValid && inputValue?.length > 4) {
                        setError('nEmployeeId', {
                          type: 'manual',
                          message: 'Employee ID must be less than 4 digits.'
                        })
                      } else {
                        clearErrors('nEmployeeId')
                      }
                      onChange(e)
                    }
                  }}
                  value={value}
                  id='nEmployeeId'
                  type='text'
                  isRequired={true}
                  label='Employee ID'
                  max={4}
                  placeholder='eg: 1947'
                  errorMessage={errors.nEmployeeId?.message}
                />
              )}
            />
          </div>

          <div className="col form-group">
            <Controller
              name='sEmailId'
              control={control}
              rules={{
                required: 'Email Id is required.'
              }}
              render={({ field, fieldState: { error } }) => (
                <CommonInput
                  {...field}
                  id='sEmailId'
                  type='email'
                  isRequired={true}
                  label='Email Address'
                  placeholder='eg: example@gmail.com'
                  errorMessage={errors.sEmailId?.message}
                />
              )}
            />
          </div>
        </div>

        <div className='row mt-2'>
          <div className="col form-group">
            <Controller
              name='nContact'
              control={control}
              rules={{
                required: 'Contact Number is required.',
                minLength: {
                  value: 10,
                  message: 'Contact Number must be atleast 10 digits.'
                }
              }}
              render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
                <CommonInput
                  ref={ref}
                  onChange={(e) => {
                    const inputValue = e?.target?.value
                    const isInputValid = /^\d*$/.test(inputValue)

                    if (!isInputValid) {
                      setError('nContact', {
                        type: 'manual',
                        message: 'Contact Number must contain only digits.'
                      })
                    } else {
                      clearErrors('nContact')
                    }
                    if (inputValue?.length > 10) {
                      setError('nContact', {
                        type: 'manual',
                        message: 'Contact Number must be less than 10 digits.'
                      })
                    }
                    onChange(e)
                  }}
                  value={value}
                  id='nContact'
                  type='text'
                  isRequired={true}
                  label='Contact Number'
                  max={10}
                  min={10}
                  placeholder='eg: 9876543210'
                  errorMessage={errors.nContact?.message}
                />
              )}
            />
          </div>

          <div className="col form-group">
            <Controller
              name='eDepartment'
              control={control}
              rules={{
                required: 'Department is required.'
              }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <label htmlFor="eDepartment">Department</label>
                  <Form.Select
                    size="md"
                    id="eDepartment"
                    style={{ paddingBottom: '0px !important' }}
                    {...field}
                  >
                    <option selected>Select your Department</option>
                    <option value='Web Development'>Web Development</option>
                    <option value='Game Development'>Game Development</option>
                    <option value='DevOps'>DevOps</option>
                    <option value='Web Designer'>Web Designer</option>
                  </Form.Select>
                  <span className='error'>{errors.eDepartment?.message}</span>
                </>
              )}
            />
          </div>
        </div>

        <div className='row mt-2'>
          <div className="col form-group">
            <Controller
              name='isComing'
              control={control}
              rules={{
                required: 'This field is required.'
              }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <label htmlFor="isComing">Would you like to join with us?</label>
                  <Form.Select
                    size="md"
                    id="isComing"
                    style={{ paddingBottom: '0px !important' }}
                    {...field}
                  >
                    <option selected>Select option</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </Form.Select>
                  <span className='error'>{errors.isComing?.message}</span>
                </>
              )}
            />
          </div>

          <div className='col'></div>
        </div>

        <div className='row mt-2'>
          <div className='col'>
            <button className='btn btn-success' type='submit'>Save</button>
          </div>
        </div>
      </form><hr className='mb-0' />

      <h1 className='header2 mt-3'>Employee Details</h1><span className='underline2'></span>
      <div className='row m-1'>
        <div className='col-3'>
          <CommonInput
            className='form-control'
            value={search}
            type='search'
            placeholder='Search Employee Name'
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className='col-9'></div>
      </div>

      <div className='m-3' style={{ height: 400 }}>
        <DataGrid
          rows={search ? searchedData : tableData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10, 15]}
        />
      </div>
    </>
  )
}

export default TripForm
