import React, { useState } from "react";
import HeroSlider from "react-slick";
// import { NextArrow, PrevArrow } from "./Arrows.Component";
const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg",
      genre_ids: [16, 10751, 12, 14, 35],
      id: 502356,
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      popularity: 11392.576,
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "2023-04-05",
      title: "The Super Mario Bros. Movie",
      video: false,
      vote_average: 7.7,
      vote_count: 3049,
    },
    {
      adult: false,
      backdrop_path: "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
      genre_ids: [18, 28],
      id: 677179,
      original_language: "en",
      original_title: "Creed III",
      overview:
        "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has nothing to lose.",
      popularity: 1585.687,
      poster_path: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      release_date: "2023-03-01",
      title: "Creed III",
      video: false,
      vote_average: 7.3,
      vote_count: 1401,
    },
    {
      adult: false,
      backdrop_path: "/zPEDfWece7gg1I0904KFFVUq5mg.jpg",
      genre_ids: [53, 28, 80],
      id: 1102776,
      original_language: "fr",
      original_title: "AKA",
      overview:
        "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
      popularity: 1560.375,
      poster_path: "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
      release_date: "2023-04-28",
      title: "AKA",
      video: false,
      vote_average: 7,
      vote_count: 300,
    },
    {
      adult: false,
      backdrop_path: "/e7FzphKs5gzoghDotAEp2FeP46u.jpg",
      genre_ids: [27, 35, 14],
      id: 649609,
      original_language: "en",
      original_title: "Renfield",
      overview:
        "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
      popularity: 1483.179,
      poster_path: "/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
      release_date: "2023-04-07",
      title: "Renfield",
      video: false,
      vote_average: 7,
      vote_count: 453,
    },
    {
      adult: false,
      backdrop_path: "/w26FmegnHL8BykasYNHADIEURBW.jpg",
      genre_ids: [10752, 36, 28],
      id: 1037644,
      original_language: "en",
      original_title: "Battle for Saipan",
      overview:
        "On July 7, 1944, a U.S. Army hospital on the remote island of Saipan is overrun by Japanese forces during a relentless attack. Outgunned and surrounded by the enemy, a lone medic puts it all on the line to lead a band of wounded soldiers to safety.",
      popularity: 1329.322,
      poster_path: "/9N3KwhzBCcqmFcqHpPCsjqfym9M.jpg",
      release_date: "2022-11-25",
      title: "Battle for Saipan",
      video: false,
      vote_average: 5.5,
      vote_count: 31,
    },
  ]);

  const settingsLG = {
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="HeroBanner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="HeroBanner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
