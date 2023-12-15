import './Nav.css';

function navbar(){
    return(
        <div className="navbar">
            <h2 className="menu">
                <a href={`/`}>
                    home
                </a>
            </h2>
            <h2 className="menu">
                <a href={`/skill`}>
                    skill
                </a>
            </h2>
            <h2 className="menu">
                <a href={`/project`}>
                    project
                </a>
            </h2>
            <h2 className="menu">
                <a href={`https://github.com/eunseongzzangzzangman`}>
                    github
                </a>
            </h2>
        </div>
    );
}
export default navbar;