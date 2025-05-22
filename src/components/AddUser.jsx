"use client";

import { addUser } from "@/redux/slice";
import { useDispatch } from "react-redux";

const AddUser = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        console.log(name);
        dispatch(addUser(name));
        form.reset();    
    };
    return (
        <div>
            <form
                className="flex flex-col gap-4 max-w-sm mx-auto mt-8 p-6 bg-white rounded shadow"
                onSubmit={handleSubmit}
            >
                <label className="text-gray-700 font-semibold" htmlFor="username">
                    User Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter user name"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
                >
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;