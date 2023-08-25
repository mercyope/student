import {Link} from "react-router-dom";


const NavLinks = ( )=> {
    return (
        <div className="container m-4 p-3 text-centre">
<ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" href="#">Active</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#">Link</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#">Link</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
  </li>
</ul>
        </div>
    )
}

export default NavLinks