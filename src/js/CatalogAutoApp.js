import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import Footer from '../html/blocks/footer'; // Общий футер
import Catalog from '../html/blocks/catalog';


console.log('Catalog React');

const CatalogAutoApp = () => {
    return (
        <main>
            <Catalog /> {/* Основной контент для страницы catalog-auto */}
        </main>
    );
};

export default CatalogAutoApp; // Экспорт по умолчанию


// Рендерим основной React-компонент в 'catalog-root'
const catalogRoot = ReactDOM.createRoot(document.getElementById('catalog-root'));
catalogRoot.render(<CatalogAutoApp />);

// Рендерим Footer в 'footer-root'
const footerRoot = ReactDOM.createRoot(document.getElementById('footer-root'));
footerRoot.render(<Footer />);
