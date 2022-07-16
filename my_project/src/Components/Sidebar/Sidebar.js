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
                            
                        </li>
                    </ol>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;