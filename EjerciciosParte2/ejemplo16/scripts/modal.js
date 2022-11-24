class Modal {
    constructor(contenedor, photo_list) {
        this.contenedor = contenedor;
        this.contenedor.innerHTML = '';
        this.currentIndex = null;
        this.photo_list = photo_list;
        this.nextPhoto = this.nextPhoto.bind(this);
        this.onModalClick = this.onModalClick.bind(this);
        this.contenedor.addEventListener('click', this.onModalClick)
    }
    hideModal() {
        document.body.classList.remove('no-scroll');
        this.contenedor.classList.add('hidden');
        this.contenedor.innerHTML = '';
        document.removeEventListener('keydown', this.nextPhoto)
    }
    nextPhoto(event) {
        if (event.key === 'Escape') {
            this.hideModal();
            return;
        }
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
            return;
        }
        let nextI = this.currentIndex;
        if (event.key === 'ArrowLeft') {
            nextI--;
        } else {
            nextI++;
        }
        if (nextI < 0) {
            nextI = this.photo_list.length - 1;
        }
        if (nextI === this.photo_list.length) {
            nextI = 0;
        }
        const photoSrc = this.photo_list[nextI];
        this.contenedor.innerHTML = '';
        const image = new Image(photoSrc);
        this.contenedor.appendChild(image.image);
        this.currentIndex = nextI;
    }
    onModalClick() {
        this.hideModal();
    }
}
