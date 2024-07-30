import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className=" w-full bg-slate-800 h-20 shadow-sm ">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to={"/"}><div className="text-white text-2xl font-bold">Dev</div></Link>
        <div className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  )
}
