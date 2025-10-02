const trailerModal = document.getElementById('trailerModal');
const trailerVideo = document.getElementById('trailerVideo');
const closeModal = document.getElementById('closeModal');
const watchButtons = document.querySelectorAll('.watch-button');

watchButtons.forEach(button => {
    button.addEventListener('click', () => {
        trailerModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            const iframe = trailerVideo;
            iframe.src = iframe.src + "&autoplay=1";
        }, 300);
    });
});

closeModal.addEventListener('click', () => {
    trailerModal.classList.remove('open');
    document.body.style.overflow = 'auto';
    
    const iframe = trailerVideo;
    iframe.src = iframe.src.replace("&autoplay=1", "");
});

trailerModal.addEventListener('click', (e) => {
    if (e.target === trailerModal) {
        trailerModal.classList.remove('open');
        document.body.style.overflow = 'auto';
        
        const iframe = trailerVideo;
        iframe.src = iframe.src.replace("&autoplay=1", "");
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && trailerModal.classList.contains('open')) {
        trailerModal.classList.remove('open');
        document.body.style.overflow = 'auto';
        
        const iframe = trailerVideo;
        iframe.src = iframe.src.replace("&autoplay=1", "");
    }
});