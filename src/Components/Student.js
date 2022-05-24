import React from 'react'
import Nav from './Nav'

import './style.css'

function Student() {
  return (
    <div>

      <button className='add_student' >Add Student</button>

<table style={{color:'yellow'}} class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Gmail</th>
      <th scope="col">Contact</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>@mdo</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>@fat</td>
      <td>1234567890</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>1234567890</td>
    </tr>
  </tbody>
</table>


    </div>
  )
}

export default Student