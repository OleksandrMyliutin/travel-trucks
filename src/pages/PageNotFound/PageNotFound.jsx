import React from 'react';
import { Link } from 'react-router-dom';
import s from './PageNotFound.module.css';

const PageNotFound = () => {
    return (
        <div className={s.wrapper}>
        <h1 className={s.code}>404</h1>
        <h2 className={s.title}>Page Not Found</h2>
        <p className={s.text}>
            Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={s.homeBtn}>
            Go back Home
        </Link>
        </div>
    );
};

export default PageNotFound;
