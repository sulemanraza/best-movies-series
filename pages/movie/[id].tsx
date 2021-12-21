import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Cast from '../../components/Movie/Cast';
import Hero from '../../components/Movie/Hero';
import Recommendations from '../../components/Movie/Recommendations';
import Sidebar from '../../components/Movie/Sidebar';

const Movie: NextPage = (props: any) => {
  const { movie, cast, recommendations } = props.data;
  const { original_title, release_date, overview, tagline } = movie;
  return (
    <>
      <Head>
        <title>
          {original_title} | {tagline} - movie series {new Date().getFullYear()}
        </title>
        <meta
          name="description"
          content={`${overview} Release Date: ${release_date}`}
        />
      </Head>
      <div className="MoviePage">
        <Hero data={movie} />
        {/* Content Area */}
        <div className="Movie_Content">
          <div className="left_side">
            <h2>Top Billed Cast</h2>
            {/* Cast */}
            {cast && <Cast data={cast} />}
            {/* Recommendations */}
            {recommendations && <Recommendations data={recommendations} />}
          </div>
          {/* sidebar */}
          <div className="right_side">{movie && <Sidebar data={movie} />}</div>
        </div>
      </div>
    </>
  );
};

// Server Side Props
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const language = 'en-US';
  const baseUrl = 'https://api.themoviedb.org/3/movie';
  //Movie info Request on Server
  const Response = await fetch(
    `${baseUrl}/${id}?api_key=${process.env.API_KEY}&language=${language}`
  );
  const movie = await Response.json();
  // Cast info Request on Server
  const CastResponse = await fetch(
    `${baseUrl}/${id}/credits?api_key=${process.env.API_KEY}&language=${language}`
  );
  const cast = await CastResponse.json();
  // Recommendations video Request on Server
  const Recommendations = await fetch(
    `${baseUrl}/${id}/recommendations?api_key=${process.env.API_KEY}&language=${language}`
  );
  const recommendations = await Recommendations.json();
  // Return Data
  const data = { movie, cast, recommendations };
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};
export default Movie;
