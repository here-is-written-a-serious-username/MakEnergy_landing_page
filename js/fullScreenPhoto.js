

const divGallery = document.querySelector(".gallery");

divGallery.addEventListener("click", onImgClick);


function onImgClick(event) {
    if (!event.target.classList.contains("splide__img")) {
        return;
    }

    event.preventDefault();

    const instance = basicLightbox.create(`<img src= "${event.target.src}"/>`,
        {
            onShow: (instance) => { document.addEventListener("keydown", onPress); },

            onClose: (instance) => { document.removeEventListener("keydown", onPress); }

        });


    instance.show();

    function onPress(event) {
        if (event.code !== "Escape") {
            return;
        }
        instance.close();
    }

}
