import { Route, Routes } from 'react-router-dom'

//styles
import './App.css'
import Navbar from './components/Navbar'

// page components
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />} />
				<Route path="/search" element={<Search />} />
				<Route path="/recipes/:id" element={<Recipe />} />
			</Routes>
		</div>
	)
}

export default App
