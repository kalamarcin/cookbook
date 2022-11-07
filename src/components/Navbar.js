// style
import { Link } from 'react-router-dom'
import { useTheme } from '../hook/useTheme'
import './Navbar.css'

const Navbar = () => {
	const { color } = useTheme()
	return (
		<div className="navbar" style={{background: color }}>
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
