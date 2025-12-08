import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Palette, House} from 'lucide-react';

const Navbar = function(){
    return(
        <div className="my-nav">
            <div className="my-nav-inner">
                <div className='my-nav-inner-left'>
                    <Link to='/' ><House /></Link>
                </div>
                <div className='my-nav-inner-right'>
                    <Palette />
                    <Link to='/' ><ShoppingCartIcon /></Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;