import AxiosUtility from "./AxiosServices";

const sendSms = async(data: any) => {
    const res = await AxiosUtility.post('/sendsms', data);

    return res;
}

const SmsServices = {
    sendSms
}

export default SmsServices;