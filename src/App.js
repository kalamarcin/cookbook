import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
			<BrowserRouter>
				<Switch>
					<Route path="/">
						<Home />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
					<Route path="search">
						<Search />
					</Route>
					<Route path="/recipe:id">
						<Recipe />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
