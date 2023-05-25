import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import SmsServices from '../services/SmsServices';

type ModalType = {
    isOpen: boolean;
    onClose: () => void;
    music_link: string;
}

const Modal = ({
    isOpen,
    onClose,
    music_link
}: ModalType) => {

    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            phonenumber: phoneNumber,
            url: music_link
        }

        try {
            await SmsServices.sendSms(data).then(() => {
                onClose();
            })
        } catch (error: any) {
            console.log(error.message);
        }
    }
    return (
        <>
            {isOpen &&
                <div className='w-full h-full fixed top-0 left-24 right-0 bottom-0'>
                    <div className='w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-[#e5e5e5a1]' />
                    <div className={`flex justify-center`}>
                        <div className={`absolute top-32 bg-white rounded-xl w-7/12`}>
                            <div className='flex justify-end'>
                                <button
                                    className="text-black hover:scale-105 transition-all my-3 mr-4"
                                    onClick={() => onClose()}
                                >
                                    <RxCross2 className='text-2xl' />
                                </button>
                            </div>

                            <div>
                                <form className="flex justify-center" onSubmit={handleSubmit}>
                                    <div className='w-full mx-20'>
                                        <div className="flex flex-col pb-10">
                                            <label htmlFor="phone">Phone number</label>
                                            <input id="email-address" name="phone" type="text" required className="w-full rounded-t-md border border-indigo-500 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="+254711000000" onChange={(e) => setPhoneNumber(e.target.value)} />
                                        </div>
                                        <div className="pb-4">
                                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Link</button>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal