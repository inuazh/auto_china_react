import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import Footer from '../html/blocks/footer'; // Общий футер
import Card from '../html/blocks/card';


console.log('Card React');

const CardApp = () => {
    return (
        <main>
            <Card /> {/* Основной контент для страницы catalog-auto */}
        </main>
    );
};

// Рендерим основной React-компонент в 'catalog-root'
const cardRoot = ReactDOM.createRoot(document.getElementById('card-root'));
cardRoot.render(<CardApp />);

// Рендерим Footer в 'footer-root'
const footerRoot = ReactDOM.createRoot(document.getElementById('footer-root'));
footerRoot.render(<Footer />);
