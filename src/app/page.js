"use client";
import AddUser from "@/components/AddUser";
import DisplayUser from "@/components/DisplayUser";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const userData = useSelector((state)=>state.users)
  return (
    <div>
      <nav className="flex items-center justify-between bg-blue-600 p-4 mb-6">
        <div className="text-white text-lg font-bold">My App</div>
        <div>
          <span className="text-white mr-4">{userData[0]?.name}</span>
          
        </div>
      </nav>
      <AddUser></AddUser>
      <DisplayUser></DisplayUser>
    </div>
  );
}
