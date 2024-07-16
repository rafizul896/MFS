import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row py-5 md:py-0 min-h-[calc(100vh-126px)] justify-center items-center">
            <div className="flex-1 flex lg:justify-end rounded-md">
                <img className="rounded-md max-h-[480px]" src="https://i.ibb.co/hLFmqVb/digital-bank-apps1.png" alt="" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center mt-8 space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold md:font-bold text-gray-800 text-center">Welcome to MFS Service</h2>
                <p className="text-gray-700 text-center">Your reliable mobile financial service platform.</p>
                <div className="flex space-x-4">
                    <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                        Register
                    </Link>
                    <Link to="/login" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
