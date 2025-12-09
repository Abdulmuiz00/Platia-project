import React from "react";
import assets from "../assets/assets";
import {
  Award,
  Badge,
  BadgeAlert,
  BadgeCheck,
  Bookmark,
  Download,
  EggFried,
  Flame,
  Menu,
  Smile,
  Star,
  Timer,
  TimerIcon,
  TimerReset,
  Trophy,
  Verified,
} from "lucide-react";
import { useState } from "react";
import { foodData } from "../components/data"; // <-- your data file
import { BiStar } from "react-icons/bi";
import { useEffect, useRef } from "react";

function Home() {
  const categories = [
    "all",
    "appetizers",
    "Entrees",
    "sweet_treats",
    "Beverages",
  ];
  const [activeTab, setActiveTab] = useState("all");

  const allFoods = [
    ...foodData.appetizers.map((item) => ({ ...item, category: "appetizers" })),
    ...foodData.Entrees.map((item) => ({ ...item, category: "Entrees" })),
    ...foodData.sweet_treats.map((item) => ({
      ...item,
      category: "sweet_treats",
    })),
    ...foodData.Beverages.map((item) => ({ ...item, category: "Beverages" })),
  ];

  const displayedFood = activeTab === "all" ? allFoods : foodData[activeTab];

  //testimonials
  const testimonials = [
    {
      name: "Marcus Chen",
      handle: "@marcuschen",
      img: assets.personm9,
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa.",
    },
    {
      name: "Sarah Mitchell",
      handle: "@sarahmitch",
      img: assets.person5,
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa.",
    },
    {
      name: "James Wilson",
      handle: "@jameswil",
      img: assets.person12,
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa.",
    },
    {
      name: "Emma Rodriguez",
      handle: "@emmarod",
      img: assets.personm12,
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "David Kumar",
      handle: "@davidkumar",
      img: assets.personm13,
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Sophia Lee",
      handle: "@sophialee",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Texit tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Sophia Lee",
      handle: "@sophialee",
      img: assets.person13,
      text: "Texit tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
  ];

  const cardWidth = 100 / 3; // 3 cards visible
  const duplicated = [...testimonials, ...testimonials];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        return next >= testimonials.length ? 0 : next;
      });
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  //chefs section
  const chefs = [
    {
      name: "Jordan Lee",
      role: "Sous Chef",
      desc: "Donec feugiat, arcu non pulvinar posuere, risus libero cursus nibh, sed dictum nibh arcu non augue.",
      badge: "Street Food Fest",
      image: assets.chef1,
      icon: <BadgeCheck className="w-7 h-5" color="#E07946"/>
    },
    {
      name: "Mila Santos",
      role: "Pastry Chef",
      desc: "Integer aliquet, urna et commodo gravida, libero lacus aliquam velit, vitae iaculis sem velit in purus.",
      badge: "Cocoa Summit",
      image: assets.chef6,
      icon: <EggFried className="w-7 h-5" color="#E07946"/>
    },
    {
      name: "Kai Thompson",
      role: "Grill Master",
      desc: "Pellentesque dapibus, nibh id pharetra interdum, risus est vehicula lectus, non iaculis velit elit ut felis.",
      badge: "Smoke-Off Winner",
      image: assets.chef8,
      icon: <Flame className="w-7 h-5" color="#E07946"/>
    },
    {
      name: "Renee Collins",
      role: "Line Cook",
      desc: "Vestibulum congue, justo eget ultricies posuere, erat nunc viverra arcu, vitae cursus arcu nunc at erat.",
      badge: "Guest Favorite",
      image: assets.chef3,
      icon: <Smile className="w-7 h-5" color="#E07946"/>
    },
  ];

  return (
    <div>
      <section id="home">
        <video
          src={assets.video}
          className="lg:h-[100vh] h-[200vh] md:h-[120vh] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full lg:h-full h-[200vh] md:h-[120vh] bg-black/50"></div>

        <div className="absolute flex lg:flex-row flex-col justify-between h-[90vh] top-10 lg:px-20 px-2 md:px-5 pt-7">
          <div className="lg:w-[50%] w-[100%] mt-12 flex flex-col gap-7">
            <h1 className="text-[#E07844] text-[17px]">
              EXPERIENCE CULINARY EXCELLENCE
            </h1>
            <h1
              className="text-6xl font-extrabold text-white"
              style={{ fontFamily: "Plus Jakarta" }}
            >
              Savor Every Moment at Platia
            </h1>
            <p className="text-[18px] text-white w-[90%]">
              Indulge in authentic Italian cuisine crafted with passion and the
              finest ingridients. From traditional recipes passed down through
              generations to innovate culinary creations, we offer an
              unforgetable dining experience.
            </p>
            <div className="flex lg:flex-row md:flex-row flex-col gap-6 w-100 h-auto">
              <button
                className="bg-amber-600 rounded-2xl lg:w-auto md:w-auto  w-[90%] text-[18px] text-white p-4
                    hover:bg-[#d75919]
                    transition-all duration-200
                    hover:-translate-y-1"
              >
                Book a Table
              </button>

              <button
                className="border-white border-2 rounded-2xl lg:w-auto md:w-auto  w-[90%] text-[18px] text-white p-4
                    hover:border-[#E07844] hover:text-[#E07844]
                    transition-all duration-200
                    hover:-translate-y-1"
              >
                View Menu
              </button>
            </div>
          </div>
          <div className="lg:w-[39%] w-[100%] lg:mt-0 mt-3 md:mt-20">
            <div className="w-[100%] md:w-[100%] bg-black/30 h-auto rounded-3xl lg:ps-auto  pt-6 ps-3">
              <h1
                className="text-white text-2xl text-center my-2"
                style={{ fontFamily: "plus" }}
              >
                Make a Reservation
              </h1>
              <form action="" className="grid-cols-2">
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  mx-2 p-4 w-[45%] my-3 outline-0 text-amber-50 "
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  mx-2  p-4 w-[45%] my-3 outline-0 text-amber-50 "
                  type="email"
                  placeholder="Your Email"
                />
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  mx-2  p-4  w-[45%] outline-0  my-3 text-amber-50 "
                  type="tel"
                  placeholder="Your Phone"
                />
                <select
                  name=""
                  style={{
                    appearance: "none",
                    WebkitAppearance: "none",
                    backgroundImage: "none",
                  }}
                  className="border-[#9E9D93] border-3 rounded-2xl  mx-2 outline-0 p-4 w-[45%]  my-3 text-[#9E9D93] text-[16px] "
                  id=""
                >
                  <option className="px-3 text-[#9E9D93]" value="">
                    Guests
                  </option>
                </select>
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  py-4 px-3  my-3 outline-0 mx-2 w-[45%]  text-[#9E9D93] "
                  type="date"
                  placeholder=""
                />
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  p-4  my-3 outline-0 mx-2 w-[45%] text-[#9E9D93] "
                  type="time"
                />
                <textarea
                  className="w-[95%] border-[#9E9D93] border-3 rounded-2xl mx-2 my-3 p-4 outline-0 text-amber-50"
                  placeholder="Special requests or Dietary restrictions"
                  id=""
                ></textarea>
                <button
                  className="btn w-[95%] mx-2 text-white text-[20px] rounded-2xl bg-amber-600 p-4 mb-3  hover:bg-[#d75919]
                    transition-all duration-200
                    hover:-translate-y-1"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="lg:h-[120vh] md:h-auto h-auto bg-[#F8EFEB] py-5 lg:px-20 md:px-5 px-2"
      >
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold text-center my-5"
        >
          About
        </h1>
        <p className="text-center md-text-[17px] mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          assumenda ea reiciendis!
        </p>
        <div className="flex lg:flex-row md:flex-col flex-col relative md:gap-7">
          <div className="lg:w-[50%] md:w-[100%] w-[100%] flex flex-col gap-3">
            <h1
              style={{ fontFamily: "Plus Jakarta" }}
              className="lg:text-3xl md:text-3xl text-4xl font-extrabold my-5"
            >
              Experience our Unique Approach
            </h1>
            <p className="text-[18px] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dolore sed repellendus laboriosam repudiandae. Deserunt, numquam
              accusantium
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              maxime velit atque fuga ipsum blanditiis cumque provident et
              accusantium, excepturi officiis autem inventore tempore ut.
            </p>
            <div className="flex flex-col lg:flex-row md:flex-row gap-3 items-center mt-4">
              <div className="flex flex-col gap-3 p-5 bg-white rounded-2xl shadow transition-transform duration-300 hover:scale-105">
                <Award size={"25px"} color="#E07844" />
                <h1 style={{ fontFamily: "Plus Jakarta" }} className="text-2xl">
                  Exceptional Service
                </h1>
                <p className="text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  nesciunt excepturi adipisci!
                </p>
              </div>
              <div className="flex flex-col gap-3 p-5 bg-white rounded-2xl shadow transition-transform duration-300 hover:scale-105">
                <Trophy size={"25px"} color="#E07844" />
                <h1 style={{ fontFamily: "Plus Jakarta" }} className="text-2xl">
                  Industry Recognition
                </h1>
                <p className="text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  nesciunt excepturi adipisci!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] md:w-[100%] w-[100%] grid grid-cols-12 gap-3 lg:p-5 md:p-5 p-1 mt-10 lg:mt-0 md:mt-6">
            <img
              src={assets.showcase3}
              alt=""
              className="lg:rounded-2xl   col-span-6  transition-transform duration-300 hover:scale-105"
            />
            <img
              src={assets.showcase8}
              alt=""
              className="lg:rounded-2xl    col-span-6  transition-transform duration-300 hover:scale-105"
            />
            <img
              src={assets.showcase6}
              alt=""
              className="lg:rounded-2xl   grid col-span-12  transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overlay lg:p-3 md:p-3 p-3 bg-[#E07844] rounded-2xl absolute text-center md:absolute md:top-240 lg:top-85 top-245 end-4 lg:end-20 md:end-20 text-white">
            <h1 className="lg:text-3xl md:text-3xl text-2xl">18</h1>
            <p>Years of Dedication</p>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#dfbeb0] pt-14 pb-5 px-4 lg:px-20">
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold text-center mb-3"
        >
          Our Menu
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Explore a variety of delicious dishes crafted with passion.
        </p>

        {/* CATEGORY NAV */}
        <nav className="lg:flex lg:justify-center grid-cols-3 md:grid md:grid-cols-5 md:gap-4 gap-20 p-4 md:p-2 mb-12 rounded-4xl bg-white">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`capitalize px-6 py-2 rounded-full transition-all duration-200 transition-transform duration-300 hover:scale-110
        ${
          activeTab === cat
            ? "bg-orange-600 text-white border-orange-600"
            : "border-gray-400 text-gray-700 hover:text-orange-600"
        }
      `}
            >
              {cat === "all"
                ? "All Dishes"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </nav>

        {/* FOOD CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-8">
          {displayedFood.map((item) => (
            <div
              key={`${item.category}-${item.id}`} // use category + id
              className="bg-white shadow-lg h-[350px] rounded-2xl overflow-hidden relative hover:scale-103 hover:border-2 hover:border-amber-500 duration-200 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                className=" w-full h-50 object-cover mb-4"
              />
              <div className="flex flex-col p-5 lg:p-3 gap-2">
                <h2 className="font-bold text-xl mb-1">{item.name}</h2>
                <p className="bg-orange-600 absolute top-42 end-6 text-white font-semibold p-3 rounded-3xl">
                  {item.price}
                </p>
                <p className="px-3 py-1 bg-green-500 text-white rounded-3xl absolute top-4">
                  {item.tag}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8EFEB] py-14 px-4 lg:px-20">
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold justify-center items-center gap-3 flex  mb-3 "
        >
          <Star size={"30px"} color="#E07844" />
          Today's Chef Recommendations
        </h1>
        <p className="text-center text-[20px] text-gray-600">
          Carefully curated dishes featuring the finest seasonal ingredients
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 mt-10 md:grid-cols-1 gap-8">
          <div className="bg-white shadow-lg h-[400px] rounded-2xl overflow-hidden relative hover:scale-103 hover:border-2 hover:border-amber-500 duration-200 cursor-pointer">
            <img
              src={assets.main9}
              className=" w-full h-50 object-cover mb-4"
            />
            <div className="flex flex-col py-5 px-5 lg:px-4 lg:py-2 gap-2">
              <h2 className="font-bold text-xl mb-1">Pan-Seared Duck Breast</h2>
              <p className="text-orange-600 text-2xl absolute top-52 end-6  font-semibold p-3 rounded-3xl">
                $34.50
              </p>
              <p className="px-3 py-1 bg-[#d25212] rounded-3xl text-white absolute top-4">
                {" "}
                CHEF's PICK
              </p>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis
                consectetur purus sit amet fermentum.
              </p>
              <div className="flex justify-between my-4">
                <p className="items-center flex gap-2">
                  <Timer color="#d25212" />
                  25 min preparation
                </p>
                <div className="flex justify-center gap-4">
                  <p className="py-1 px-2 text-amber-700 bg-amber-200 rounded-2xl">
                    GF
                  </p>
                  <p className="py-1 px-2 text-green-700 bg-green-200 rounded-2xl">
                    DF
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg h-[400px] rounded-2xl overflow-hidden relative hover:scale-103 hover:border-2 hover:border-amber-500 duration-200 cursor-pointer">
            <img
              src={assets.main8}
              className=" w-full h-50 object-cover mb-4"
            />
            <div className="flex flex-col py-5 px-5 lg:px-4 lg:py-2 gap-2">
              <h2 className="font-bold text-xl mb-1">
                Lobster Thermidor Risotto
              </h2>
              <p className="text-orange-600 text-2xl absolute top-52 end-6  font-semibold p-3 rounded-3xl">
                $39.90
              </p>
              <p className="px-3 py-1 bg-[#d25212] rounded-3xl text-white absolute top-4">
                {" "}
                CHEF's PICK
              </p>
              <p>
                Fusce dapibus tellus ac cursus commodo tortor mauris condimentum
                nibh ut fermentum massa.
              </p>
              <div className="flex justify-between my-4">
                <p className="items-center flex gap-2">
                  <Timer color="#d25212" />
                  25 min preparation
                </p>
                <div className="flex justify-center gap-4">
                  <p className="py-1 px-2 text-green-700 bg-green-200 rounded-2xl">
                    SF
                  </p>
                  <p className="py-1 px-2 text-amber-700 bg-amber-200 rounded-2xl">
                    PREMIUM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Testimonials" className="bg-[#dfbeb0] py-14 px-4 lg:px-20">
        {/* Title */}
        <div className="max-w-6xl mx-auto text-center px-5 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl md:text-[19px] mx-auto">
            Honest reviews from real users who love our service.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="max-w-6xl lg:grid grid grid-cols-1 md:grid md:grid-cols-2 h-[350px] overflow-x-scroll lg:grid-cols-3 scrollbar-none mx-auto overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="w-full flex-shrink-0 px-5">
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  {/* Stars */}
                  <div className="flex gap-1 text-yellow-500 text-xl mb-4">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5"
                          stroke="none"
                          fill="currentColor"
                        />
                      ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {item.text}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      className="w-12 h-12 rounded-full object-cover"
                      alt={item.name}
                    />
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.handle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-orange-600 scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

      <section
        id="chefs"
        className="bg-[#F8EFEB] pt-10 px-4 lg:px-20 h-auto"
      >
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold text-center mb-3"
        >
          Chefs
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="relative w-[40%]">
              <img
                src={assets.chef4}
                alt=""
                className="h-[100%]  rounded-3xl object-cover transform  duration-200 hover:scale-105"
              />
              <p className="absolute py-1 px-2 text-[15px] flex items-center top-10 border border-amber-600 bg-pink-200 rounded-2xl start-5">
                <Star className="text-blue-500" fill="currentColor" color="" />{" "}
                Michelin Mention
              </p>
            </div>
            <div className="text flex flex-col w-[45%] gap-5 my-auto me-auto h-auto ">
              <p className="py-1 px-2 text-[15px] w-35 flex items-center  border border-amber-600 bg-pink-200 rounded-2xl start-5">
                <Verified
                  className="text-blue-500"
                  fill="currentColor"
                  color="gold"
                />{" "}
                Featured Chef
              </p>
              <h1 style={{ fontFamily: "Plus Jakarta" }} className="text-3xl">
                Avery Montrose
              </h1>
              <p className="text-gray-500 text-[17px]">Executive Chef</p>
              <p>
                Curabitur convallis lectus a sapien dictum, sed posuere urna
                fermentum. Maecenas sodales, neque non pretium ultrices, lacus
                nibh finibus mi, non vulputate arcu quam at nisl.
              </p>
              <div className="flex gap-2">
                <p className="py-1 px-2 text-[13px] flex items-center border border-amber-600 bg-pink-200 rounded-2xl start-5">
                  <Award
                    size={"18px"}
                    className="text-blue-500"
                    fill="currentColor"
                    color="gold"
                  />{" "}
                  Gourmand Trophy 2022
                </p>
                <p className="py-1 px-2 text-[13px] flex items-center border border-amber-600 bg-pink-200 rounded-2xl start-5">
                  <Bookmark
                    size={"18px"}
                    className="text-blue-500"
                    fill="currentColor"
                    color="gold"
                  />{" "}
                  Le Cordon Bleu Honors
                </p>
                <p className="py-1 px-2 text-[13px] flex items-center border border-amber-600 bg-pink-200 rounded-2xl start-5">
                  <Trophy
                    size={"18px"}
                    className="text-blue-500"
                    fill="currentColor"
                    color="gold"
                  />{" "}
                  City Best Tasting Menu
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-7 gap-8">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className=" rounded-3xl shadow-2xl overflow-hidden hover:overflow-hidden hover:scale-105 transform duration-300"
              >
                <img
                  src={chef.image}
                  className="h-56 w-full object-cover hover:scale-105 transform duration-300"
                  alt={chef.name}
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold">{chef.name}</h2>
                  <p className="text-gray-500 text-sm mb-3">{chef.role}</p>

                  <p className="text-gray-600 text-sm mb-4">{chef.desc}</p>

                  <div className="flex items-center gap-2 border border-amber-600 bg-orange-100 text-orange-600 px-3 py-1 rounded-full w-max text-sm">
                    {chef.icon}
                    {chef.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
