import Image from 'next/image';
import { ReactChild, ReactFragment, ReactPortal, Key } from 'react';

const Hero = (props: { data: any }) => {
  const { data } = props;
  // let imgUrl = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`;
  if (!data) {
    return <div className="loader">Loading...</div>;
  } else {
    return (
      <>
        {data !== null ? (
          <div className="hero">
            <div className="poster">
              <Image
                src={
                  'https://image.tmdb.org/t/p/w220_and_h330_face/' +
                  data.poster_path
                }
                alt=""
                width="220"
                height="330"
              />
            </div>
            <div className="content">
              <h1>
                {data.title} ({new Date(data.release_date).getFullYear()})
              </h1>
              <div className="date_or_cate flex_div">
                <span style={{ background: 'black', color: 'white' }}>
                  PG-13
                </span>
                <span>
                  {new Date(data.release_date).getDate() < 10
                    ? '0' + new Date(data.release_date).getDate()
                    : new Date(data.release_date).getDate()}
                  /
                  {new Date(data.release_date).getMonth() + 1 < 10
                    ? '0' + (new Date(data.release_date).getMonth() + 1)
                    : new Date(data.release_date).getMonth() + 1}
                  /{new Date(data.release_date).getFullYear()}
                </span>
                <span>-</span>
                {data['genres'].map(
                  (
                    cate: {
                      name:
                        | boolean
                        | ReactChild
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                    },
                    index: Key | null | undefined
                  ) => (
                    <span key={index}>{cate.name},</span>
                  )
                )}
                <span>
                  {Math.floor(data.runtime / 60) + 'h'}{' '}
                  {(data.runtime % 60) + 'm'}
                </span>
              </div>
              <div className="rating flex_div">
                <p>{data.vote_average}</p>
                <span>
                  User <br /> Score
                </span>
              </div>
              <div className="overview">
                <h3>{data.tagline}</h3>
                <h2>Overview</h2>
                <p>{data.overview}</p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
};

export default Hero;
function gradient(arg0: number, deg: any, arg2: any, arg3: any) {
  throw new Error('Function not implemented.');
}

function linearGradient(arg0: number, deg: any, arg2: any, arg3: any) {
  throw new Error('Function not implemented.');
}
