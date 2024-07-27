const  URL= "http://localhost:4006"

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
    console.log(result)
    return result;
}