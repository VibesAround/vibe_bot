import React from 'react';
import Button from "../Button/Button";

const Header = () => {


    return (
        <div className='header'>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
            
        </div>
    );
};

export default Header;