import React, { useEffect, useRef } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { SiAboutdotme } from 'react-icons/si';
import { FiLogIn, FiShoppingCart } from 'react-icons/fi';
import { MdOutlineContactPage, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import './Header.scss';

const navList = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
]

const Header = () => {
    const { pathname } = useLocation();
    const active = navList.findIndex(item => item.path === pathname);
    const headerRef = useRef(null);
    const productInCart = useSelector(state => state.products);

    const renderNav = navList.map((item, index) => {
        return (
            <li key={index} className={`${index === active ? 'navbar__item active' : 'navbar__item'}`}>
                <Link to={item.path}>{item.name}</Link>
            </li>
        )
    });

    useEffect(() => {
        const headerScroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('active');
            } else {
                headerRef.current.classList.remove('active');
            }
        }

        window.addEventListener('scroll', headerScroll);

        return () => {
            window.removeEventListener('scroll', headerScroll)
        }
    }, [])


    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <ul className='navbar'>
                        {renderNav}
                    </ul>

                    <ul className='navbar__icons' ref={headerRef}>
                        <Link to='/'><FaHome /></Link>
                        <Link to='/products'><MdOutlineProductionQuantityLimits /></Link>
                        <Link to='/about'><SiAboutdotme /></Link>
                        <Link to='/contact'><MdOutlineContactPage /></Link>
                    </ul>

                    <div className="header__title"><Link to='/'>STORE</Link></div>
                    <div className="btns">
                        <Button className='btn--flex'><FiLogIn /><p>Log in</p></Button>
                        <Button className='btn--flex'><BsFillPersonPlusFill /><p>Register</p></Button>
                        <Link to='/cart'>
                            <Button className='btn--flex'>
                                <FiShoppingCart /><p>Cart</p><span>({productInCart.length})</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;