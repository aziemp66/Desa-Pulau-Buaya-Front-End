import React from "react";
import { Link } from "react-router-dom";
import mascotBoth from "../../Assets/Icons/mascot-both.svg";

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

import { GiCrafting } from "react-icons/gi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
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
          date="2010 - 2011"
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
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Home;
