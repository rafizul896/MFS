import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import AdminMenu from './Menu/AdminMenu'
import AgentMenu from './Menu/AgentMenu'
import UserMenu from './Menu/UserMenu'
import useUser from '../../../hooks/useUser'
import Loader from '../../Loader/Loader'
import { axiosCommon } from '../../../hooks/useAxiosCommon'

const Sidebar = () => {
    const { user, isLoading } = useUser()
    const [isActive, setActive] = useState(false)
    const navigate = useNavigate();

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    const handleLogOut = async () => {
        console.log('logout')
        localStorage.removeItem('id')
        await axiosCommon.post('/logout')
        navigate('/')
    }

    if (isLoading) return <Loader />

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img
                                // className='hidden md:block'
                                src='https://i.ibb.co/fXjX98Z/Screenshot-2024-07-16-113718.png'
                                alt='logo'
                                className='w-[120px] h-[50px] rounded-md'
                            />
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-100 mx-auto'>
                            <Link to='/'>
                                <img
                                    // className='hidden md:block'
                                    src='https://i.ibb.co/fXjX98Z/Screenshot-2024-07-16-113718.png'
                                    alt='logo'
                                    className='w-full rounded-md'
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* Conditional toggle button here.. */}

                        {/*  Menu Items */}
                        <nav>
                            {user?.role === 'User' && <UserMenu />}
                            {user?.role === 'Agent' && <AgentMenu />}
                            {user?.role === 'Admin' && <AdminMenu />}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    {/* Profile Menu */}
                    {/* < NavLink
                        to='/dashboard/profile'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FcSettings className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Profile</span>
                    </NavLink> */}
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div >
        </>
    )
}

export default Sidebar