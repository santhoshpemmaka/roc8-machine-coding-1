import "./App.scss";
import {useData} from "./Context/ContextData";
import {CartItems, Products} from "./components";
import {Routes, Route} from "react-router-dom";
function App() {
	const {state, dispatch} = useData();

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='/cartitems' element={<CartItems />} />
			</Routes>
		</div>
	);
}

export default App;
