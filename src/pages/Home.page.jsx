import React, { useEffect, useState } from "react";
import axios from "axios";
//component
import EntertainmentCardSlider from "../component/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../component/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../component/PosterSlider/PosterSlider.Component";

//Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";

const Homepage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStremEvents, setOnlineStreamEvents] = useState([]);
  //recommended
  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);
  //premier
  useEffect(() => {
    const requestPremierMovies = async () => {
      const getPremierMovies = await axios.get("/movie/now_playing");
      setPremierMovies(getPremierMovies.data.results);
    };
    requestPremierMovies();
  }, []);
  //Stream events
  useEffect(() => {
    const requestOnlineStreamEvents = async () => {
      const getOnlineStreamEvents = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getOnlineStreamEvents.data.results);
    };
    requestOnlineStreamEvents();
  }, []);
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gery-800 sm:ml-3 ml-0 my-3">
          The best of Enertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          poster={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupey"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every Friday"
            poster={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="online Streaming Event"
          subtitle=""
          poster={onlineStremEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(Homepage);
