// import our Link component so that our Header always takes us back to home
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            {/* Wrap the H1 that is in a Router link which navigates back to the home page */}
            <Link to="/">
                <h1>Hackflix</h1>
            </Link>
        </header>
    )
}

export default Header;