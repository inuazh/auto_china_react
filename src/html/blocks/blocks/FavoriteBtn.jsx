import React, { useState } from 'react';

const FavoriteBtn = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        const nextSelected = !isSelected;
        setIsSelected(nextSelected);

        if (nextSelected) {
            // Если только что добавили в избранное, показать сообщение
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 1200);
        }
    };

    return (
        <div className="fav-btn">
            <button 
                className={`btn-favorite ${isSelected ? 'btn-favorite--selected' : ''}`} 
                onClick={handleClick}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="icon-favorite-btn"
                        d="M4.5 22V4.22222C4.5 3.61111 4.71 3.08778 5.13 2.65222C5.54929 2.21741 6.05357 2 6.64286 2H17.3571C17.9464 2 18.4511 2.21741 18.8711 2.65222C19.2904 3.08778 19.5 3.61111 19.5 4.22222V22L12 18.6667L4.5 22Z"
                    />
                    <path d="M19.2969 22.4569L20 22.7694V22V4.22222C20 3.48336 19.7413 2.8353 19.2313 2.30546L19.2307 2.30485C18.7192 1.77534 18.0859 1.5 17.3571 1.5H6.64286C5.91403 1.5 5.28094 1.77537 4.77008 2.30515C4.25922 2.83494 4 3.4831 4 4.22222V22V22.7694L4.70307 22.4569L12 19.2138L19.2969 22.4569ZM17.5 18.9225L12.2031 16.5683L12 16.478L11.7969 16.5683L6.5 18.9225V4.22222C6.5 4.15545 6.50899 4.12777 6.51359 4.11632C6.51799 4.10538 6.5289 4.08279 6.56969 4.04049C6.59188 4.01747 6.60587 4.00619 6.61263 4.00131C6.61783 4.00072 6.62737 4 6.64286 4H17.3571C17.3733 4 17.383 4.00079 17.3881 4.00139C17.3947 4.00607 17.4088 4.01722 17.4314 4.04047C17.471 4.08191 17.4818 4.10422 17.4863 4.11533C17.491 4.12709 17.5 4.15517 17.5 4.22222V18.9225ZM17.3836 3.9985C17.3836 3.99848 17.3839 3.99865 17.3846 3.99907L17.3836 3.9985ZM6.6175 3.99812C6.61749 3.99814 6.61715 3.99835 6.6165 3.99869L6.6175 3.99812Z" />
                </svg>
            </button>
            {showModal && (
                <div className="fav-btn-modal" style={{ display: "block" }}>
                    Добавлено в избранное!
                </div>
            )}
        </div>
    );
};

export default FavoriteBtn;
