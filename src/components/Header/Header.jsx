import React from 'react'
import svg from '../../assets/icons/Logo.svg'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Container from '../Container/Container'
const Header = () => {
    const navLink = ({isActive}) => isActive ? s.activeLink : s.navLink;
    return (
        <div className={s.headerContainer}>
            <Container>
                <div className={s.flexContainer}>
                    <img src={svg} alt="logo" />
                    <nav className={s.navContainer}>
                        <NavLink to={'/'} className={navLink}>Home</NavLink>
                        <NavLink to={'/catalog'} className={navLink}>Catalog</NavLink>
                    </nav>
                </div>
            </Container>
        </div>
    )
}

export default Header
