import ToDoLogo from "./ToDoLogo"
import Navigation from "./Navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"

function Header() {

  const linkClass = "hover:bg-[#448ABC] p-2 rounded-md hover:text-white"
  
  return (
    <header>

      <div className="flex justify-center mb-5 mt-5">
        <ToDoLogo />
      </div>

      <div className="pr-8">
        <ul className="flex justify-end">
          <li>
              <Link to="/login" className={linkClass}>
                Log In <FontAwesomeIcon icon={faSignInAlt} size="1x"/>                 
              </Link>
            </li>
        </ul>
                  
      </div>

        <Navigation/>
    </header>
  )
}

export default Header
