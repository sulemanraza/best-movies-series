import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { ReactChild, ReactFragment, ReactPortal, Key } from 'react';

const Cast = (props: { data: any }) => {
  const { data } = props;
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  if (!data) {
    return <div className="loader">Loading...</div>;
  } else {
    return (
      <>
        {/* Cast */}
        <Slider {...settings}>
          {data !== null
            ? data['cast'].map(
                (
                  item: {
                    profile_path: string | null;
                    name:
                      | boolean
                      | ReactChild
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                    character: string | any[];
                  },
                  index: Key | null | undefined
                ) => (
                  <li key={index} className="card">
                    <Image
                      src={
                        item.profile_path != null
                          ? 'https://www.themoviedb.org/t/p/w138_and_h175_face' +
                            item.profile_path
                          : '/info.svg'
                      }
                      alt=""
                      width="138"
                      height="175"
                      layout="responsive"
                    />
                    <h4 className="name">{item.name}</h4>
                    <p className="character">{item.character.slice(0, 18)}</p>
                  </li>
                )
              )
            : ''}
        </Slider>
        {/* Crew */}
        <div style={{ margin: '4rem 0' }}>
          <h2>Full Crew</h2>
          <Slider {...settings}>
            {data !== null
              ? data['crew'].map(
                  (
                    item: {
                      profile_path: string | null;
                      name:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                      department:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                    },
                    index: Key | null | undefined
                  ) => (
                    <li key={index} className="card">
                      <Image
                        src={
                          item.profile_path != null
                            ? 'https://www.themoviedb.org/t/p/w138_and_h175_face' +
                              item.profile_path
                            : '/info.svg'
                        }
                        alt=""
                        width="138"
                        height="175"
                      />
                      <h4 className="name">{item.name}</h4>
                      <p className="character">{item.department}</p>
                    </li>
                  )
                )
              : ''}
          </Slider>
        </div>
      </>
    );
  }
};

export default Cast;
