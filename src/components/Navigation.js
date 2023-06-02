import './Navigation.css';

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
                    <a href='/trending'>Trending</a>
                </li>
                <li className='nav-item'>
                    <a href='/movies'>Movies</a>
                </li>
                <li className='nav-item'>
                    <a href='/series'>Series</a>
                </li>
                <li className='nav-item'>
                    <a href='/signin'>Sign In</a>
                </li>
            </ul>
        </div>
    );
}