import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Palette, House} from 'lucide-react';

import { useThemeStore } from '../store/useThemeStore';

const Navbar = function(){

    const themeStore = useThemeStore();

    const [paletteVis, setPaletteVis] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || '');

    const openPalette = function(){
        const vis = !paletteVis;
        setPaletteVis(vis);
    }

    const themes = [
        "Light",
        "Retro",
        "Cyberpunk",
        "Valentine",
        "Garden",
        "Aqua",
        "Wireframe",
        "Autumn",
    ];

    useEffect(()=>{
        themeStore.setTheme(theme);
    }, [theme]);

    return(
        <>
            <div className='my-nav'>
                <div className='my-nav-inner'>
                    <div className='nav-icon-container hover'>
                        <Link to='/' ><House /></Link>
                    </div>
                    <div className='my-nav-inner-right'>
                        <div className='nav-icon-container hover'>
                            <Palette onClick={openPalette} />
                        </div>
                        <div className='nav-icon-container hover'>
                            <Link to='/' ><ShoppingCartIcon /></Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                paletteVis?
                <div className='theme-selector-container'>
                    <div className='theme-selector-dropdown'>
                        {themes.map((item, index)=>{
                            return (
                                <p 
                                    key={index} 
                                    className='hover theme-item'
                                    onClick={function(){setTheme(item); setPaletteVis(false);}}
                                >
                                    {item}
                                </p>
                            )
                        })}
                    </div>
                </div>:''
            }
        </>
    )
};

export default Navbar;