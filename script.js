.magia-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 999;
}

.magia {
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url('img/estrela.png'); /* imagem de estrela ou brilho */
    background-size: cover;
    animation: flutuar 6s linear infinite;
    opacity: 0.8;
}

@keyframes flutuar {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}
