import axios from "axios";

export async function verifyUser(userData){

    const formData = new FormData()
    formData.append('email', userData.email)
    formData.append('password', userData.password)
    const response = await axios({
        url: "http://localhost:5002/user/verifyUser",
        method: 'POST',
        data: formData
    })
    return response
}