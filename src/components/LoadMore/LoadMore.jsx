import React from 'react';
import s from './LoadMore.module.css';

const LoadMore = ({ onClick}) => {
    return (
        <button
            className={s.button}
            onClick={onClick}
            >
            Load more
        </button>
    );
};

export default LoadMore;
