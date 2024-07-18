import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import { toast } from "react-toastify";
import Select from 'react-select';

const Register = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const roleOptions = [
        { value: 'User', label: 'User' },
        { value: 'Agent', label: 'Agent' },
    ];

    // use query
    const { mutateAsync } = useMutation({
        mutationFn: async user => {
            const { data } = await axiosCommon.post('/register', user)
            return data
        },
        onSuccess: (data) => {
            if (data.message == 'Already as a Account') {
                toast.warning('This number or email as already an account')
            }
            else {
                navigate('/login')
                toast.success('User registered, pending approval')
            }
        },
        onError: e => {
            console.log(e.message)
        }
    })

    const handleCreateUser = async (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const mobileNumber = from.number.value;
        const email = from.email.value;
        const pin = from.pin.value;
        const role = from.role.value;
        const user = { name, mobileNumber, email, pin, role };
        console.log(user);

        if (pin.length !== 5) {
            return toast.warning('5-digit PIN (must be number)')
        }

        await mutateAsync(user);
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-126px)] py-5 md:my-0'>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src={''}
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-2xl text-center text-gray-600 '>
                        Get Your Free Account Now
                    </p>


                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            Registration Now
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleCreateUser}>
                        <div className='mt-4 flex-1'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Account Type
                            </label>
                            <Select
                                name="role"
                                options={roleOptions}
                                className="w-full"
                            />
                        </div>
                        <div className='mt-4 flex-1'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                required
                                id='name'
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Mobile Number
                            </label>
                            <input
                                required
                                id='number'
                                name='number'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                required
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='pin'
                                >
                                    Pin
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    required
                                    id='pin'
                                    name='pin'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type={show ? 'number' : 'password'}
                                />
                                <div onClick={() => setShow(!show)} className="absolute top-[30%] right-3 cursor-pointer">
                                    {
                                        !show ? <IoEyeOffOutline /> : <IoEyeOutline />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-5 py-3 text-lg font-medium text-white bg-[#2557a7] rounded-md hover:bg-[#0d2d5e]'
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>
                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or Login
                        </Link>
                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${'https://i.imghippo.com/files/aXSPo1715364590.svg'})`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Register;