import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import Banners from '../html/blocks/banners';
import Footer from '../html/blocks/footer';
import SearchForm from '../html/blocks/search';
import NewCars from '../html/blocks/new-cars'; // Импорт NewCars
import PopularCars from '../html/blocks/popular-cars';
import Brands from '../html/blocks/brands';
import Hero from '../html/blocks/hero';


console.log('React');

const App = () => {
    return (
        <main className="main">
            <Hero/>
            <Brands/>
            <SearchForm /> 
            <NewCars /> 
            <Banners />
            <PopularCars/>
        </main>
    );
};

export default App;

// Рендерим основной React-компонент в 'react-root'
const mainRoot = ReactDOM.createRoot(document.getElementById('react-root-index'));
mainRoot.render(<App />);



const footerRoot = ReactDOM.createRoot(document.getElementById('footer-root'));
footerRoot.render(<Footer />);


// элементы на реакт, рабочее приложение в браузере, 




