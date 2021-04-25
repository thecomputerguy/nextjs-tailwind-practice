import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Movie from "./movie";

export default function Home({ movies }) {
  return (
    <div className="grid grid-rows-2 gap-4">
      <div className="">1</div>
      <div className="">2</div>
      <div className="">3</div>
      <div className="">4</div>
      <div className="">5</div>
      <Header />
      <Nav />
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const movies = await res.json();
  console.log(movies);

  return {
    props: {
      movies,
    },
  };
}
