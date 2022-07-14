import './Sidebar.css';
import articles from '../data/articles.json'

function Sidebar(){
    return(
        <div className="Sidebar">
            <nav>
                <ul>
                    {articles.map(item =>
                    <ol>
                        <li>
                            <a href={item.href}>{item.title}</a>
                        </li>
                    </ol>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;