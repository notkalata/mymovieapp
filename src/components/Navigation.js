import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigation(){
    function toggleMenu(){
        let element = document.querySelector('.mobile-menu i');
        element.classList.toggle('fa-times');

        let menu = document.querySelector('.nav');
        menu.classList.toggle('menu-open');

        let element2 = document.querySelector('.mobile-menu i');
        element2.classList.toggle('mobile-menu-fixed');
    }

    return (
        <div className='navigation'>
            <h1><a href='/'>PlusMovie</a></h1>
            <div className='mobile-menu' onClick={toggleMenu}>
                <i className='fa fa-bars'></i>
            </div>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/series'>Series</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/signin'>Sign In</Link>
                </li>
            </ul>
        </div>
    );
}