import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { Key, useState } from 'react';
import Cards from '../../components/Layout/Cards';

const Popular: NextPage = (props: any) => {
  const { data } = props;
  const router = useRouter();
  const [page, setPage] = useState(2);
  const { total_pages } = data;
  const NextPage = () => {
    if (page < total_pages) {
      setPage(page + 1);
      router.push({
        pathname: '/movie/popular',
        query: { page: page },
      });
    }
  };
  // ============ Start Return here
  if (!data) {
    return <div className="loader">Loading...</div>;
  }
  return (
    <>
      <div className="HomePage">
        <div className="MinCard">
          {data['results'].map((item: any, index: Key | null | undefined) => (
            <Cards key={index} data={item} />
          ))}
        </div>
      </div>
      {/* next page */}
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          padding: '20px auto',
        }}
      >
        <button
          style={{
            padding: '5px 30px',
            fontSize: '20px',
            cursor: 'pointer',
            margin: '30px auto',
          }}
          onClick={NextPage}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page } = context.query;
  const language = 'en-US';
  const baseUrl = 'https://api.themoviedb.org/3/movie';
  // Request on Server
  const Response = await fetch(
    `${baseUrl}/popular?api_key=${
      process.env.API_KEY
    }&language=${language}&page=${page ? page : 2}`
  );
  const data = await Response.json();
  return {
    props: { data },
  };
};
export default Popular;
