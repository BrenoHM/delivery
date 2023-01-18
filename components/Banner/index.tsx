import styles from './styles.module.css';
import Image from "next/image";
import banner from '../../assets/images/banner.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";

export const Banner = () => {
    const configAutoPlay = {
        delay: 1000,
        disableOnInteraction: false,
    }

    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={styles.swiper}
                autoplay={configAutoPlay}
                modules={[Autoplay]}
            >
                <SwiperSlide className={styles.slide}>
                    <div className={styles.slideImg}>1</div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.slideImg}>2</div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}