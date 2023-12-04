import {$host} from "./index";

export const sendEmail = async (email) => {
    const res = await $host.post('send-message/',
        email
    ).catch(error => {
        console.log(error)
    })
    if (res) return res.data;
    return null;
}