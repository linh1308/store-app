import React, { useEffect, useRef } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { FiLogIn, FiShoppingCart } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
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
    const navRef = useRef(null);
    const productInCart = useSelector(state => state.products);

    const renderNav = navList.map((item, index) => {
        return (
            <li key={index} onClick={() => navRef.current.classList.remove('active')} className={`${index === active ? 'navbar__item active' : 'navbar__item'}`}>
                <Link to={item.path}>{item.name}</Link>
            </li>
        )
    });

    useEffect(() => {
        const handleDropdownClick = () => {
            if (!navRef.current.classList.contains('active')) {
                navRef.current.classList.add('active');
            } else {
                navRef.current.classList.remove('active');
            }
        };

        document.querySelector('.dropdown').addEventListener('click', handleDropdownClick);

        return () => {
            document.querySelector('.dropdown').removeEventListener('click', handleDropdownClick);
        }
    }, [])

    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <ul className='navbar' ref={navRef}>
                        {renderNav}
                    </ul>
                    <MdOutlineKeyboardArrowDown className='dropdown' />
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