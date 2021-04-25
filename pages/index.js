import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home({ movies }) {
  return (
    <div className="bg-gray-50">
      <Header />
      <Main />
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
