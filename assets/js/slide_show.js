export class SlideShow {
    #dataList;
    #animate;
    #DOMView;

    constructor(data, animate, DOMView) {
        this.#dataList = data;
        this.#animate = animate;
        this.#DOMView = DOMView;
    }
}

export function addDragCarouselSlideShow(dataList, DOMView) {
    createStructureDragCarouselSlideShow(dataList, DOMView);
    addStyleDragCarouselSlideShow(DOMView);
    addActionDragCarouselSlideShow();
}

function createStructureDragCarouselSlideShow(dataList, DOMView) {
    let DOMBannerNav = document.createElement("div");

    DOMBannerNav.classList.add("c-banner__nav");
    DOMBannerNav.innerHTML = `
        <button class="c-banner__nav__prev" id="bannerNavPrev">
            <i class="fa-solid fa-angle-left" aria-hidden="true"></i>
        </button>
        <button class="c-banner__nav__next" id="bannerNavNext">
            <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
        </button>
    `;

    DOMView.appendChild(DOMBannerNav);

    let DOMBannerConteiner = document.createElement("div"),
        DOMList = document.createElement("ul");

    DOMBannerConteiner.classList.add("c-banner__carousel__conteiner");
    DOMList.classList.add("c-banner__carousel__list");

    dataList.forEach((item) => {
        let DOMItem = document.createElement("li"),
            DOMLink = document.createElement("a"),
            DOMFigure = document.createElement("figure"),
            DOMImg = document.createElement("img"),
            DOMFigcaption = document.createElement("figcaption");

        DOMItem.classList.add("c-banner__carousel__item");

        DOMLink.href = item.url;
        DOMLink.draggable = false;

        DOMImg.src = item.image;
        DOMImg.alt = item.name;
        DOMImg.draggable = false;

        DOMFigcaption.innerHTML = item.name;

        DOMFigure.appendChild(DOMImg);
        DOMFigure.appendChild(DOMFigcaption);
        DOMLink.appendChild(DOMFigure);
        DOMItem.appendChild(DOMLink);

        DOMList.appendChild(DOMItem);
    });

    DOMBannerConteiner.appendChild(DOMList);
    DOMView.appendChild(DOMBannerConteiner);
}

function addStyleDragCarouselSlideShow(DOMView) {
    let DOMStyle = document.createElement("style");

    DOMStyle.innerHTML = `
        div:has(.c-banner__nav) {
            position: relative;
        }

        .c-banner__nav {
            width: 100%;
            position: absolute;
            top: calc(50% - ((1.5rem + 10px) / 2));
            display: flex;
            justify-content: space-between;
        }

        .c-banner__nav__prev,
        .c-banner__nav__next {
            padding: 10px;
            border: none;
            background-color: hsl(0, 0%, 70%);
            font-size: 1.15rem;
            text-align: center;
            color: black;
            cursor: pointer;
            transition-duration: 0.2s;
            transition-timing-function: linear;
            opacity: 50%;
            z-index: 1;
        }

        .c-banner__nav__prev:hover,
        .c-banner__nav__next:hover {
            opacity: 80%;
        }

        .c-banner__nav__prev {
            border-radius: 0 50% 50% 0;
        }

        .c-banner__nav__next {
            border-radius: 50% 0 0 50%;
        }

        .c-banner__carousel__conteiner {
            overflow: hidden;
            scroll-snap-type: x mandatory;
            scrollbar-width: 0;
            scroll-behavior: smooth;
        }

        .c-banner__carousel__conteiner.isDragging,
        .c-banner__carousel__conteiner.isDragging * {
            cursor: grabbing;
            user-select: none;
            pointer-events: none;
        }

        .c-banner__carousel__conteiner,
        .c-banner__carousel__list,
        .c-banner__carousel__item * {
            width: 100%;
            height: 100%;
        }

        .c-banner__carousel__list {
            display: flex;
            touch-action: pan-y;
        }

        .c-banner__carousel__item {
            scroll-snap-align: start;
        }

        .c-banner__carousel__item figure {
            position: relative;
        }

        .c-banner__carousel__item img {
            width: calc(100vw - 15px);
            height: 100%;
            object-fit: cover;
        }

        .c-banner__carousel__item figcaption {
            width: fit-content;
            height: fit-content;
            max-width: 60%;
            padding: 0.5rem;
            position: absolute;
            bottom: 1.5rem;
            right: 0;
            background-color: rgba(0, 0, 0, 0.6);
            font-size: 1.2rem;
            color: white;
            font-weight: bold;
            white-space: normal;
            text-wrap: reverse;
            text-align: right;
        }

        .c-banner__carousel__item:active {
            cursor: grabbing;
        }
    `;

    DOMView.appendChild(DOMStyle);
}

function addActionDragCarouselSlideShow() {
    const carouselNav = document.querySelectorAll(".c-banner__nav button"),
        carouselConteiner = document.getElementsByClassName("c-banner__carousel__conteiner")[0],
        carouselList = document.getElementsByClassName("c-banner__carousel__list")[0],
        carouseItens = document.querySelectorAll(".c-banner__carousel__item");

    let currentSlide = 0,
        isDragging = false,
        startPointerX = 0,
        startScrollLeft = 0;

    function scrollStart(e) {
        isDragging = true;
        startPointerX = e.pageX || e.clientX;
        startScrollLeft = carouselConteiner.scrollLeft;

        document.addEventListener("pointermove", scrollingCarrousel);
        document.addEventListener("pointerup", scrollStop);

        carouselConteiner.setPointerCapture(e.pointerId);
    }

    function scrollingCarrousel(e = null) {
        if (!isDragging) return;

        if (e) {
            carouselConteiner.classList.add("isDragging");
            carouselConteiner.scrollLeft = startScrollLeft - ((e.pageX || e.clientX) - startPointerX);
        } else {
            if (currentSlide < 0) {
                currentSlide = carouseItens.length - 1;
            } else if (currentSlide > carouseItens.length - 1) {
                currentSlide = 0;
            }

            carouselConteiner.scrollLeft = carouselConteiner.offsetWidth * currentSlide;
        }
    }

    function scrollStop() {
        isDragging = false;
        startPointerX = 0;
        startScrollLeft = 0;

        carouselConteiner.classList.remove("isDragging");

        document.removeEventListener("pointermove", scrollingCarrousel);
        document.removeEventListener("pointerup", scrollStop);
    }

    carouselNav.forEach((buton) => {
        buton.addEventListener("click", (e) => {
            isDragging = true;
            buton.className == "c-banner__nav__next" ? currentSlide++ : currentSlide--;
            scrollingCarrousel();
            isDragging = false;
        });
    });

    carouselConteiner.addEventListener("pointerdown", scrollStart);
}

/*
DOMStyle.innerHTML = `
        #slideshow ul,
        #slideshow li,
        #slideshow a,
        #slideshow figure,
        #slideshow img {
            width: 100%;
            height: 100%;
        }

        #slideshow ul {
            display: flex;
        }

        #slideshow a {
            position: relative;
            display: block;
        }

        #slideshow figure img {
            object-fit: cover;
            position: absolute;
        }

        #slideshow figure figcaption {
            position: absolute;
            bottom: 1rem;
            right: 0px;
            background-color: rgba(0, 0, 0, 0.6);
            padding: 0.3rem;
            color: white;
            font-weight: bold;
            text-wrap: revert;
            text-align: right;
        }

        #slideshow button {
            position: absolute;
            top: 1%;
            width: 10%;
            height: 100%;
            background: none;
            border: none;
            padding: 1rem;
            font-size: 2rem;
            cursor: pointer;
        }

        #slideShowLeftButton {
            left: 0;
            text-align: left;
        }

        #slideShowRightButton {
            right: 0;
            text-align: right;
        }
    `;
    */
