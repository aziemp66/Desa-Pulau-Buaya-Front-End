import React from "react";
import { Link } from "react-router-dom";
import mascotBoth from "../../Assets/Icons/mascot-both.svg";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

import photo1 from "../../Assets/car-1.jpg";
import photo2 from "../../Assets/car-2.jpg";
import photo3 from "../../Assets/car-3.jpg";
import photo4 from "../../Assets/car-4.jpg";
import kainTenun from "../../Assets/KainTenun/DSC_0645.jpg";

import { BsCircleFill } from "react-icons/bs";
import {
  MdOutlineWork as WorkIcon,
  MdOutlineSchool as SchoolIcon,
  MdStar as StarIcon,
  MdTravelExplore,
} from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

import { GiCrafting } from "react-icons/gi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="bg-cream-light flex flex-col">
      <div className="bg-[url('./src/Assets/bg-home.jpg')] bg-no-repeat bg-center bg-cover relative w-screen h-[35rem]">
        <div className="bg-[rgba(0,0,0,0.25)] absolute w-full h-full flex justify-center items-center flex-col ">
          <img src={mascotBoth} alt="mascot" />
          <h1 className="text-white text-[60px] font-noto-sans font-bold">
            Desa Pulau Buaya
          </h1>
          <p className="text-white text-center">
            Kecamatan Alor Barat Laut, Kabupaten Alor,
            <br /> Nusa Tenggara Timur
          </p>
        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#2b6474", color: "#fff" }}
          icon={<MdTravelExplore />}
        >
          <Carousel infiniteLoop>
            <div>
              <img src={photo1} alt="carousel" />
            </div>
            <div>
              <img src={photo2} alt="carousel" />
            </div>
            <div>
              <img src={photo3} alt="carousel" />
            </div>
            <div>
              <img src={photo4} alt="carousel" />
            </div>
          </Carousel>
          <p className="text-center">Potret Wilayah Desa Pulau Buaya</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#2b6474", color: "#fff" }}
          icon={<GiCrafting />}
        >
          <img src={kainTenun} alt="tenun" />
          <p className="text-center">Potret Kain Tenun Khas Pulau Buaya</p>
          <div className="flex justify-center items-center mt-2">
            <Link to="/textile">
              <button className="text-center border-2 border-blue-dark rounded-3xl px-8 py-2">
                Lihat Lainnya
              </button>
            </Link>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#2b6474", color: "#fff" }}
          icon={<TbMapSearch />}
        >
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="w-full h-80"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=desa%20pulau%20buaya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
          <p className="text-center">Letak Wilayah Desa Pulau Buaya</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Home;
