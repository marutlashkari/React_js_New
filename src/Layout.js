import './index.css';
import { Outlet, Link } from 'react-router-dom';


function Layout(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">

                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav ms-auto">

                        <li class="nav-item mx-2 navbut">
                            <Link to='/'>Home</Link>{""}
                        </li>

                        <li class="nav-item mx-2 navbut">
                            <Link to='/Detail'>Detail</Link>
                        </li>

                        <li class="nav-item mx-2 navbut">
                            <Link to='/Detail/AddData'>Add Data</Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>


        <div className='outlet'>
            <Outlet></Outlet>
        </div>

        <h1 className='footer'><span>&#169;</span>Footer</h1>
        </>
    )
}

export default Layout;