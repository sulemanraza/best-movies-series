import type { GetServerSideProps, NextPage } from 'next';
import { Key } from 'react';
import Cards from '../components/Layout/Cards';

const Home: NextPage = (props: any) => {
  const { data } = props;
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const language = 'en-US';
  const baseUrl = 'https://api.themoviedb.org/3/movie';
  // Request on Server
  const Response = await fetch(
    `${baseUrl}/popular?api_key=${process.env.API_KEY}&language=${language}&page=1`
  );
  const data = await Response.json();
  return {
    props: { data },
  };
};
export default Home;
