import './Header.css';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <div className="Header-site-header">
            <h1 className='h1'>Кресты МЕТРО-2033</h1>
            <div className='hi'>Игра на двоих</div>

            <div className='nav1'>
                {props.menu.map((ele, index) => {
                    return (
                        <div key={index} className="nav-item">
                            <Link to={ele}>{ele}</Link>
                        </div>
                    );
                 })}
            </div>

        </div>
    );
}

export default Header;