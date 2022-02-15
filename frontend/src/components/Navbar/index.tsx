import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <a href="/"><h1>BalacobacoMovies</h1></a>
                    <a href="https://github.com/israelemf" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/israelemf</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;