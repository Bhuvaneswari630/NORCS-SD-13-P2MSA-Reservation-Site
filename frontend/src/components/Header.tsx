import { Link } from "react-router-dom";
import "../index.css";
import React from "react";
// import SignOutButton from "./SignOutButton";

const Header = () => {
  return (
    <div className="bg-green-800 bg-cover bg-center py-10">
      {/* <div className="bg-green-800 py-6 " > */}
      <div className="container mx-auto flex justify-between">
        <span className="text-5xl text-white font-bold tracking-tight">
          <Link to="/">Happy Camper</Link>
        </span>
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/showcamps">All Campgrounds</Link>
        </span>
        <span className="flex space-x-2">
            <>
              <Link to="/my-bookings"
                className="items-center text-black px-3 font-bold hover:bg-green-#052e16 hover:rounded-lg hover:text-white"
              >My bookings</Link>
              <Link to="/my-campsites"
                className="items-center text-black px-3 font-bold hover:bg-green-#052e16 hover:rounded-lg hover:text-white"
              >My campsites</Link>
              {/* <SignOutButton /> */}
            </>
        </span>
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link className="link" to="/">
            Campsite Reservation
          </Link>
        </span>
        <span
          className="text-3xl text-white font-bold tracking-tight" //</div>className="flex space-x-2"
        >
          <Link
            className="link"
            to="/sign-in"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;