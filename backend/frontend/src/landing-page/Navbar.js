import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-6 bg-white shadow-sm ">
      <Link className="flex-shrink-0" to="/">
        <img src="/media/images/logo.svg" alt="logo" className="w-32 md:w-40" />
      </Link>
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li>
          <Link
            to="/signup"
            className="hover:text-blue-600 transition duration-200"
          >
            Signup
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-600 transition duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className="hover:text-blue-600 transition duration-200"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            className="hover:text-blue-600 transition duration-200"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className="hover:text-blue-600 transition duration-200"
          >
            Support
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
        <i
          class="fa fa-bars text-2xl text-gray-700 hover:text-blue-600 transition cursor-pointer"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
