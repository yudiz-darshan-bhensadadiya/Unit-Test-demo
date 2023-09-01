import React from 'react'

function DisplayData ({ data }) {
  return (
    <>

      <tbody>
        <tr>
          <td>{data?.nEmployeeId}</td>
          <td>{data?.fName} {data?.lName}</td>
          <td>{data?.sEmailId}</td>
          <td>{data?.nContact}</td>
          <td>{data?.eDepartment}</td>
          <td>{data?.isComing}</td>
        </tr>
      </tbody>

    </>
  )
}

export default DisplayData 
