import { useRef } from 'react';
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar(props) {
    // const [search, setSearch] = useState('')
    const navigate = useNavigate();

    const searchRef = useRef()

    function onSubmit(e) {
        e.preventDefault()
        navigate('/search/' + searchRef.current.value)
    }

    return (
        <nav className={props.isDark ? "dark" : ""}>
            <h1 className="nav--brand"><Link to={'/'} >Foodies</Link></h1>
            <div className="nav--searchbox">
                <form onSubmit={onSubmit} >
                    <input
                        required
                        className="nav--input"
                        ref={searchRef}
                        name="search"
                        // onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search recipes"
                    />
                    <button className="nav-button" type="submit"><GoSearch /></button>
                </form>
            </div>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleIsDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    );
}
