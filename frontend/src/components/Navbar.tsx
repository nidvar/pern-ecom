import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';

const Navbar = function(){
    return(
        <div className="bg-sky-200">
            <h1>Navbar - <ShoppingCartIcon /> </h1>
            <Link to='/' >Home</Link>
            <Link to='/products' >Products</Link>
        </div>
    )
};

export default Navbar;