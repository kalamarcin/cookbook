import {Route, Routes} from 'react-router-dom'

//styles
import './App.css'

// page components
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />} />
				<Route path="/search" element={<Search />} />
				<Route path="/recipe:id" element={<Recipe />} />
			</Routes>
		</div>
	)
}

export default App
