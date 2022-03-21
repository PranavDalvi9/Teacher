import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <nav>
    <div className="navbar"  style={{width : "50%" , display: "flex" , gap: "50px" , justifyContent : "space-evenly"}}>
      <Link to="/" title="home"> <button className="home">Home</button> </Link>
          <Link to="/Mystery" title="Mystery"> <button className="Mystery">Mystery</button> </Link>
          <Link to="/Technology" title="Technology"> <button className="Technology">Technology</button> </Link>

          <Link to="/Mythology" title="Mythology"> <button className="Mythology">Mythology</button> </Link>
          <Link to="/History" title="History"> <button className="History">History</button> </Link>
      </div>
    </nav>
   
    </>
  );
};



