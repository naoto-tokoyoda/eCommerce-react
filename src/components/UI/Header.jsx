import React from 'react'

import "./Header.css"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <div className="header">
        <div className="header__logo">
            <StoreIcon className="header__logoImage" fontSize='large'></StoreIcon>
            <h2 className="header__logoTitle">
                eCommerce shop
            </h2>
        </div>

        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"></SearchIcon>
        </div>

        <div className="header__nav">
            <div className="nav__item">
                <span className="nav__itemLineOne">
                    Hello,
                </span>
                <span className="nav__itemLineTwo">
                    Sign In
                </span>
            </div>
            <div className="nav__item">
                <span className="nav__itemLineOne">
                    Your
                </span>
                <span className="nav__itemLineTwo">
                    Shop
                </span>
            </div>
            <div className="nav__item nav__itemCart">
                <span className="nav__itemLineTwo nav__cartCount">
                    0
                </span>
                <span className="nav__itemLineOne">
                    <ShoppingCartIcon ></ShoppingCartIcon>
                </span>
                
            </div>
        </div>
    </div>
  )
}

export default Header