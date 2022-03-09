import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<Detail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/" element={<Home />}/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
