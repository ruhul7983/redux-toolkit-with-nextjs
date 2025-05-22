"use client";

import { removeUser } from "@/redux/slice";
import { useDispatch, useSelector } from "react-redux";

const DisplayUser = () => {
    const userData = useSelector((state) => state.users);
    console.log("From display: ", userData);
    const dispatch = useDispatch();
    const handleRemoveUser = (userId) => {
        console.log(userId);
        
        dispatch(removeUser(userId))
    }
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">User Details</h2>
            {userData.map((user) => (
                <p key={user.id} className="mb-2 flex item-center">
                    <span className="text-gray-700 p-2">Name: {user.name}</span> 
                    <button className="p-2 bg-red-500 rounded text-white" onClick={()=>handleRemoveUser(user.id)}>Remove user</button>
                </p>
            ))}
        </div>
    );
};

export default DisplayUser;
