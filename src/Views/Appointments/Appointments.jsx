import React, { useEffect, useState } from 'react'

export const Appointments = () => {
    const [error, setError] = useState("")
    const [appointments, setAppointments] = useState([])
  return (
    <>
        <h1 className="text-center mt-5 mb-5">Appointments</h1>
        <div className="container">
                <table className="table mb-5">
                    <thead className="table-dark">
                        <tr className="text-center" >
                            <th scope="col">id</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Service</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                </table>
        </div>
    </>
  )
}
