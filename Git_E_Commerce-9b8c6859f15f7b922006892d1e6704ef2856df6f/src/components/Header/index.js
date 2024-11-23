import { Link } from "react-router-dom";
import logo from "../../assets/th (1).jpg";
import { Button } from "react-bootstrap"; // Ensure this is correct
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../SearchBox";

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <nav className="container-fluid w-100">
          <div className="row d-flex align-items-center">

            <div className="col-sm-2 part-1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="Logo" />
                <span className="ml-2 mt-1"> ECOM</span>
              </Link>
            </div>

            <div className="col-xs-3  d-flex align-items-center part-2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdMenuOpen />
              </Button>
              <SearchBox/>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;