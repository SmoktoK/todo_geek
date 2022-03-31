import React from 'react';
import {Link} from 'react-router-dom';


const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="ms-2 navbar-brand mb-0 h1">
                Меню
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/users' className="nav-item nav-link active">
                        Список пользователей
                    </Link>
                    <Link to='/projects' className="nav-item nav-link active">
                        Проекты
                    </Link>
                    <Link to='/notes' className="nav-item nav-link active">
                        Заметки
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Menu
