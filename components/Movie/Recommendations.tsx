import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import { Key } from 'react';

const Recommendations = (props: { data: any }) => {
  const { data } = props;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // ============ Start Return here
  if (!data) {
    return <div className="loader">Loading...</div>;
  }
  return (
    <>
      <div style={{ margin: '4rem 0' }}>
        <h2>Recommendations</h2>
        <Slider {...settings}>
          {data != null
            ? data['results'].map(
                (
                  item: {
                    id: string;
                    poster_path: null;
                    backdrop_path: string;
                    title: string | any[];
                  },
                  index: Key | null | undefined
                ) => (
                  <Link href={'/movie/' + item.id} key={index}>
                    <a className="recommendations">
                      <Image
                        src={
                          item.poster_path != null
                            ? 'https://www.themoviedb.org/t/p/w250_and_h141_face' +
                              item.backdrop_path
                            : '/info.svg'
                        }
                        alt=""
                        width="250"
                        height="141"
                      />
                      <div
                        className="flex_div"
                        style={{
                          justifyContent: 'space-between',
                          padding: '.5rem',
                          fontSize: '1.4rem',
                        }}
                      >
                        <span>{item.title.slice(0, 35)}</span>
                      </div>
                    </a>
                  </Link>
                )
              )
            : ''}
        </Slider>
      </div>
    </>
  );
};

export default Recommendations;
