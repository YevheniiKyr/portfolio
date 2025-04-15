import {$host} from "./index";

export const sendEmail = async (formData) => {
    const res = await $host.post('/send-message', formData)
    return res.data;
}