import React, { useEffect, useState } from 'react'
import { createAppointment, deleteAppointmentById, getProfileAppointments, getServices } from '../../Services/apiCalls'
import "./Appointments.css"


export const Appointments = () => {
    const [error, setError] = useState("")
    const [appointments, setAppointments] = useState([])
    let [update, setUpdate] = useState(0)
    const [editing, setEditing] = useState(false)
    const [newAppointment, setNewAppointment] = useState({
        date: "",
        serviceId: ""
    });
    const [services, setServices] = useState([])

    useEffect(() => {
        const fullToken = JSON.parse(localStorage.getItem("fullToken"))
        const token = fullToken.token
        const bringAppointments = async () => {
            const allAppointments = await getProfileAppointments(token)
            if (allAppointments.success) {
                setAppointments(allAppointments.data)
            }
            else {
                setError("Error getting Appointments.")
            }
        }
        bringAppointments()
    }, [update])

    useEffect(() => {
        const bringServices = async () => {
            const allServices = await getServices()
            if (allServices.success) {
                setServices(allServices.data)
            }
            else {
                setError("Error getting Appointments.")
            }
        }
        bringServices()
    }, [])

    const deleteUserHandler = async (e) => {
        const id = e.target.name
        const fullToken = JSON.parse(localStorage.getItem("fullToken"))
        const token = fullToken.token
        const res = await deleteAppointmentById(id, token)
        if (res.success) {
            setError("")
            setUpdate(++update)
        } else {
            setError("Error deleting Appointment.")
        }
    }

    function editingButtonHandler() {
        setEditing(!editing)
    }
    const inputHandler = (e) => {

        if (e.target.value === "Elige el servicio") {
            console.log("You cannot pass")
            return
        }
        setNewAppointment({
            ...newAppointment,
            [e.target.name]: e.target.value,
        });
    };
    const todayFullTimeString = new Date()
        .toISOString()
        .slice(0, new Date().toISOString().lastIndexOf(":"));

    const confirmButtonHandler = async () => {
        const fullToken = JSON.parse(localStorage.getItem("fullToken"))
        const token = fullToken.token
        const response = await createAppointment(newAppointment, token)
        if (response.success) {
            const newData = await getProfileAppointments(token)
            setAppointments(newData.data)
            setEditing(!editing)
            setUpdate(++ update)
        }
    }

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
                    <tbody>
                        {appointments.length && appointments.map((appointment) => {
                            let date = new Date(appointment.appointmentDate)
                            return (
                                <tr key={appointment.id} className="text-center">
                                    <th scope="row">{appointment.id}</th>
                                    <td>{date.toISOString().slice(0, 16)}</td>
                                    <td>{appointment.service.serviceName}</td>
                                    <td>
                                        <input type="button" className="delete" onClick={deleteUserHandler} name={appointment.id} value="🛇" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-2">
                        <input
                            type="datetime-local"
                            min={todayFullTimeString}
                            value={newAppointment.date}
                            name="appointmentDate"
                            onChange={(e) => inputHandler(e)}
                            className={editing ? "mb-4 form-control" : "hidden"}
                        />
                    </div>
                    <div className="col-2">
                        <select  name="serviceId" defaultValue="" onChange={inputHandler} className={editing ? "mb-4 form-control" : "hidden"}>
                            <option disabled hidden value="">
                                Choose Service
                            </option>
                            {services.map((service) => {
                                return <option value={service.id} key={service.id}>{service.serviceName}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="text-center">
                    <input type="button" name="Create" className="btn btn-primary" value={editing ? "Cancel" : "Create"} onClick={editingButtonHandler} />
                </div>
                <div className="text-center mt-2">
                    <input type="button" name="Save" value="Save" className={editing ? "btn btn-primary" : "hidden"} onClick={confirmButtonHandler} />
                </div>
            </div>
            <h1 className="text-center mt-5 mb-5">{error}</h1>
        </>
    )
}
