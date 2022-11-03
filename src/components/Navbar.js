// style
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	return (
		<div className="navbar">
			<nav>
				<Link to="/" className='brand'>
					<h1>Cookbook</h1>
				</Link>
				<Link to="/create">
					<h1>Create Recep</h1>
				</Link>
			</nav>
		</div>
	)
}

export default Navbar
