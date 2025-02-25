import { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import clsx from "clsx";
import css from "./ReviewFoto.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { icons as sprite } from '../../assets/images/index.js';

import imageOne from "../../assets/images/imageOne.png";
import imageTwo from "../../assets/images/imageTwo.png";
import imageThree from "../../assets/images/imageThree.png";
import imageFour from "../../assets/images/imageFour.png";
import imageFive from "../../assets/images/imageFive.png";
import imageSix from "../../assets/images/imageSix.png";
import imageSeven from "../../assets/images/imageSeven.png";
import imageEigth from "../../assets/images/imageEigth.png";
import imageNine from "../../assets/images/imageNine.png";
import imageTen from "../../assets/images/imageTen.png";
import imageEleven from "../../assets/images/imageElev.png";
import imageTwel from "../../assets/images/imageTwelf.png";
import imageThird from "../../assets/images/imageThreeten.png";
import imageFourteen from "../../assets/images/imageFourteen.png";
import imageFiveteen from "../../assets/images/imageFiveteen.png";
import imageSixteen from "../../assets/images/imageSixteen.png";
import imageSeventeen from "../../assets/images/imageSeventeen.png";
import imageEigthteen from "../../assets/images/imageEigthteen.png";

const images = [
  imageOne, imageTwo, imageThree, imageFour, imageFive,
  imageSix, imageSeven, imageEigth, imageNine, imageTen,
  imageEleven, imageTwel, imageThird, imageFourteen, imageFiveteen, 
  imageSixteen, imageSeventeen, imageEigthteen
];

const ReviewFoto = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperContainerRef = useRef(null);
  const swiperRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (!swiperRef.current && swiperContainerRef.current) {
        swiperRef.current = new Swiper(swiperContainerRef.current, {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 16,
          navigation: {
            nextEl: prevButtonRef.current,
            prevEl: nextButtonRef.current,
          },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1440: { slidesPerView: 4, spaceBetween: 16 },
          },
        });
      }
    }, 100); // Додаємо затримку, щоб дочекатися рендеру кнопок
  }, []);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <section className={css.section} id="reviews">
        <div className={css.container}>
          <h2 className={css.sectionsTitle}>Отзывы</h2>
          <div className="swiper swiper-projects" ref={swiperContainerRef}>
            <ul className={clsx(css.projectsList, "swiper-wrapper")}>
              {images.map((image, index) => (
                <li
                  key={index}
                  className={clsx(css.projectsListItem, "swiper-slide")}
                  onClick={() => openLightbox(index)}
                >
                  <img className={css.imageItem} src={image} alt={`photo-${index}`} />
                </li>
              ))}
            </ul>
            <div className={css.buttonsThumb}>
              <button
                onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
                className={clsx(css.swipeBtnProjects, "swiper-button-prev")}
                type="button"
                ref={prevButtonRef}
              >
                <svg className={clsx(css.btnSvg, css.btnSvgRight)}>
                  <use xlinkHref={`${sprite}#icon-arrow-narrow-right`} />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current && swiperRef.current.slideNext()}
                className={clsx(css.swipeBtnProjects, "swiper-button-next")}
                type="button"
                ref={nextButtonRef}
              >
                <svg className={css.btnSvg}>
                  <use xlinkHref={`${sprite}#icon-arrow-narrow-right`} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={photoIndex}
          onIndexChange={setPhotoIndex}
          className={css.yarl__container}
        />
      )}
    </>
  );
};

export default ReviewFoto;
