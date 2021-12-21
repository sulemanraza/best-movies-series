import Image from 'next/image';
import Link from 'next/link';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

const Cards = (props: { data: any }) => {
  const { data } = props;
  let date = new Date(data.release_date);
  return (
    <Link href={'/movie/' + data.id}>
      <a style={{ color: 'black' }}>
        <div className="MinCardItem" title={data.title}>
          <Image
            src={
              'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
              data.poster_path
            }
            alt={data.title}
            width="320"
            height="430"
            layout="responsive"
          />
          <div className="rating">
            <p>{data.vote_average}</p>
          </div>
          <div className="body">
            <h2>
              {data.title.length > 27
                ? data.title.slice(0, 25) + '...'
                : data.title}
            </h2>
            <p className="date">
              <b>Release:</b>{' '}
              {date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-
              {date.getMonth() + 1 < 10
                ? '0' + (date.getMonth() + 1)
                : date.getMonth() + 1}
              -{date.getFullYear()}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Cards;
