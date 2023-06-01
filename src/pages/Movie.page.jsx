import React, { useEffect, useState, useContext } from "react";
import MovieLayoutHoc from "../layout/Movie.layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../context/Movie.context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../component/PosterSlider/PosterSlider.Component";

const Moviepage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMOvies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  //for getting cast
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  //for similar movies
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  //for recommended movies
  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);
  const settingsCast = {};
  const settings = {};
  return (
    <>
      {/* MovieHero */}
      <div className="my-12 container px-4 lg:w-2/1 lg-ml-20">
        <div className="flex flex-col item-start gap-3">
          <h1 className=" text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>
          <div className=" flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className=" flex flex-col items-start ">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to 150 on all Visa card* on BookMyShow Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8 ">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className=" flex flex-col items-start ">
                <h3 className="text-gray-700 text-xl font-bold">
                  View on Apple Pay
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to 150 on all Visa card* on BookMyShow Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* cast Slider */}
        <div className="my-8">
          <hr />
        </div>

        {/* recommended movies */}
        <div className="my-8 ">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            isDark={false}
            poster={recommendedMovies}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>
        {/* recommended slider */}
        <div className="my-8 ">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            isDark={false}
            poster={recommendedMovies}
          />
        </div>
      </div>
    </>
  );
};

export default MovieLayoutHoc(Moviepage);
