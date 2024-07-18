import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import { toast } from "react-toastify";

const Login = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const from = location?.state || '/'

    // use query
    const { mutateAsync } = useMutation({
        mutationFn: async user => {
            const { data } = await axiosCommon.post('/login', user)
            return data
        },
        onSuccess: (res) => {
            localStorage.setItem('id', res?.id)
            toast.success('Login Successfully')
            navigate(from)
        },
        onError: e => {
            console.log(e.message)
            toast.error('Invalid credentials')
        }
    })

    const handleSignIn = async (e) => {
        e.preventDefault()
        const form = e.target;
        const identifier = form.identifier.value;
        const pin = form.pin.value;
        const user = { identifier, pin }
        await mutateAsync(user)
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-126px)] my-5 md:my-0'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${'https://i.imghippo.com/files/aXSPo1715364590.svg'})`,
                    }}
                ></div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src={''}
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-2xl text-center text-gray-600 '>
                        Welcome back!
                    </p>

                    <form onSubmit={handleSignIn}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='identifier'
                            >
                                Mobile Number / Email
                            </label>
                            <input
                                id='identifier'
                                autoComplete='identifier'
                                name='identifier'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600'
                                    htmlFor='pin'
                                >
                                    Password
                                </label>
                            </div>
                            <div className="relative">
                                <input
                                    id='pin'
                                    autoComplete='pin'
                                    name='pin'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
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
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/register'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or register
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;