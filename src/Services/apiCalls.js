const URL = "http://localhost:4006"

export const registerUser = async (credentials) => {

    if (credentials.email === "" || credentials.password === "") {
        return console.log("No Email or Password");
    }

    const request = await fetch(`${URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const result = await request.json();

    return result;
}

export const loginUser = async (credentials) => {

    if (credentials.email === "" || credentials.password === "") {
        return console.log("No Email or Password");
    }

    const request = await fetch(`${URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const result = await request.json();

    return result;
}

export const getServices = async () => {
    const request = await fetch(`${URL}/api/services`);
    const result = await request.json();

    return result;
}

export const getProfile = async (token) => {
    const response = await fetch(`${URL}/api/users/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    return await response.json()
}


export const updateProfile = async (changes, token) => {
    const response = await fetch(`${URL}/api/users/profile`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(changes)
    })
    return await response.json()
}

export const getAllUsers= async(token)=>{
    const response= await fetch(`${URL}/api/users/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    })
    return await response.json()
}
export const deleteUserById= async(id,token)=>{
    const response= await fetch(`${URL}/api/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    })
    return await response.json()
}

export const getProfileAppointments= async(token)=>{
    const response= await fetch(`${URL}/api/appointments`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    })
    return await response.json()
}

export const deleteAppointmentById= async(id,token)=>{
    const response= await fetch(`http://localhost:4006/api/appointments/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    })
    return await response.json()
}

export const createAppointment = async (data, token) => {

    if (data.appointmentDate === "" && data.serviceId === null) {
        return console.log("No Appointment date or Service");
    }

    const request = await fetch(`${URL}/api/appointments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
        body: JSON.stringify({appointmentDate:data.appointmentDate, serviceId:data.serviceId}),
    });

    const result = await request.json();

    return result;
}