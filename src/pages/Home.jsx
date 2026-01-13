import React from "react";
import assets from "../assets/assets";
import {
  Award,
  Badge,
  BadgeAlert,
  BadgeCheck,
  Book,
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
  Facebook,
  Instagram,
  Twitter,
  Clock,
  LocateIcon,
  Pointer,
  Mail,
  Phone,
  Locate,
  PointerIcon,
  MapPin,
  Users2,
  Leaf,
  Recycle,
  User,
  AlignLeft,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { foodData } from "../components/data"; // <-- your data file
import { galleryfood } from "../components/data"; // <-- your data file
import { BiStar } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaArrowRightLong, FaFacebook, FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter, FaWater } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender, SlDiamond } from "react-icons/sl";
import BuggyHubMap from "../components/BuggyHubMap";
import { IoMdCheckmark } from "react-icons/io";
import { BsHeart, BsStar,  BsThunderbolt, BsTrophy } from "react-icons/bs";
import { PiVan } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail, TfiHeadphone } from "react-icons/tfi";
import { IoPaperPlane } from "react-icons/io5";
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

  const categories2 = ["all", "food", "drinks", "interior", "staffs"];
  const [activeTab2, setActiveTab2] = useState("all");

  const allFoods2 = [
    ...galleryfood.food.map((item) => ({ ...item, category: "Food" })),
    ...galleryfood.drinks.map((item) => ({ ...item, category: "Drinks" })),
    ...galleryfood.interior.map((item) => ({
      ...item,
      category: "Interior",
    })),
    ...galleryfood.staffs.map((item) => ({ ...item, category: "Staffs" })),
  ];

  const displayedFood2 =
    activeTab2 === "all" ? allFoods2 : galleryfood[activeTab2];

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
      icon: <BadgeCheck className="w-7 h-5" color="#E07946" />,

      // ⭐ HOVER ICONS
      icon1: <FaFacebookF size={18} />,
      icon2: <FaInstagram size={18} />,
      icon3: <FaTwitter size={18} />,
    },

    {
      name: "Mila Santos",
      role: "Pastry Chef",
      desc: "Integer aliquet, urna et commodo gravida, libero lacus aliquam velit, vitae iaculis sem velit in purus.",
      badge: "Cocoa Summit",
      image: assets.chef6,
      icon: <EggFried className="w-7 h-5" color="#E07946" />,

      icon1: <Facebook size={18} />,
      icon2: <Instagram size={18} />,
      icon3: <Twitter size={18} />,
    },

    {
      name: "Kai Thompson",
      role: "Grill Master",
      desc: "Pellentesque dapibus, nibh id pharetra interdum, risus est vehicula lectus, non iaculis velit elit ut felis.",
      badge: "Smoke-Off Winner",
      image: assets.chef8,
      icon: <Flame className="w-7 h-5" color="#E07946" />,

      icon1: <Facebook size={18} />,
      icon2: <Instagram size={18} />,
      icon3: <Twitter size={18} />,
    },

    {
      name: "Renee Collins",
      role: "Line Cook",
      desc: "Vestibulum congue, justo eget ultricies posuere, erat nunc viverra arcu, vitae cursus arcu nunc at erat.",
      badge: "Guest Favorite",
      image: assets.chef3,
      icon: <Smile className="w-7 h-5" color="#E07946" />,

      icon1: <Facebook size={18} />,

      icon2: <Instagram size={18} />,
      icon3: <Twitter size={18} />,
    },
  ];

  return (
    <div>
      <section id="home">
        <video
          src={assets.video}
          className="h-[200vh] md:h-[120vh] lg:h-screen w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full lg:h-full h-[200vh] md:h-[120vh] bg-black/50"></div>

        <div className="absolute flex lg:flex-row flex-col justify-between h-[90vh] top-10 lg:px-20 px-2 md:px-5 pt-7">
          <div className=" w-full lg:w-[50%] mt-12 flex flex-col gap-7">
            <h1 className="text-[#E07844] text-[17px] md:text-[17px] lg:text-[17px]">
              EXPERIENCE CULINARY EXCELLENCE
            </h1>
            <h1
              className="text-[43px] md:text-6xl lg:text-6xl font-extrabold w-full text-white "
              style={{ fontFamily: "Plus Jakarta" }}
            >
              Savor Every Moment at Platia
            </h1>
            <p className="text-[18px] text-white w-full md:w-[90%] lg:w-[90%] text-start ">
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
          <div className="lg:w-[39%] w-full lg:mt-4 mt-3  md:mt-20">
            <div className="w-full md:w-full bg-black/30 h-auto rounded-3xl lg:ps-auto  pt-6 ps-3">
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
        className="lg:h-[120vh] md:h-auto h-auto bg-[#F8EFEB] py-5 lg:px-20 md:px-6 px-2"
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
          <div className="lg:w-[50%] md:w-full w-full flex flex-col gap-3">
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
          <div className="lg:w-[50%] md:w-full w-full grid grid-cols-12 gap-3 lg:p-5 md:p-5 p-1 mt-10 lg:mt-0 md:mt-6">
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

      <section
        id="menu"
        className="bg-[#dfbeb0] pt-14 pb-5 px-4 md:px-6  lg:px-20"
      >
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
              className={`capitalize px-6 py-2 rounded-full transition-transform duration-300 hover:scale-110
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
              className="bg-white shadow-lg h-[350px] rounded-2xl overflow-hidden relative hover:scale-103 duration-200 cursor-pointer"
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

      <section className="bg-[#F8EFEB] py-14 px-4 md:px-6 lg:px-20">
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
          <div className="bg-white shadow-lg h-[400px] rounded-2xl overflow-hidden relative hover:scale-103 duration-200 cursor-pointer">
            <img
              src={assets.main9}
              className=" w-full h-50 object-cover mb-4 hover:scale-103 duration-200 translate"
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
          <div className="bg-white shadow-lg h-[400px] rounded-2xl overflow-hidden relative hover:scale-103 duration-200 cursor-pointer">
            <img
              src={assets.main8}
              className=" w-full h-50 object-cover mb-4 hover:scale-103 duration-200 translate"
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

      <section
        id="Testimonials"
        className="bg-[#dfbeb0] py-14 px-4 md:px-6  lg:px-20"
      >
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
              <div key={i} className="w-full shrink-0 px-5">
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
        className="bg-[#F8EFEB] pt-10 px-4 md:px-6 lg:px-20 h-auto"
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
          <div className="flex flex-col md:flex-col lg:flex-row  gap-4">
            <div className="relative w-full md:w-full lg:w-[40%] h-[450px] rounded-3xl overflow-hidden group">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={assets.chef4}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <p
                className="absolute top-10 start-5 py-1 px-2 text-[15px] flex items-center gap-1
                border border-amber-600 bg-pink-200 rounded-2xl z-10"
              >
                <Star className="text-blue-500" fill="currentColor" />
                Michelin Mention
              </p>
            </div>

            <div className="text flex flex-col w-full md:w-full lg:w-[45%] gap-5 my-auto me-auto h-auto ">
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
                className="relative group rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transform duration-300"
              >
                {/* IMAGE AREA */}
                <div className="relative">
                  <img
                    src={chef.image}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                    alt={chef.name}
                  />

                  {/* ⭐ HOVER ICONS ⭐ */}
                  <div
                    className="
            absolute bottom-3 right-3 
            flex items-center gap-3
            opacity-0 group-hover:opacity-100
            translate-y-3 group-hover:translate-y-0
            transition-all duration-300
          "
                  >
                    {/* ICON 1 */}
                    <div className="p-2 bg-white rounded-full shadow hover:bg-amber-600 hover:text-white hover:scale-110 transition cursor-pointer">
                      {chef.icon1}
                    </div>

                    {/* ICON 2 */}
                    <div className="p-2 bg-white rounded-full shadow hover:bg-amber-600 hover:text-white hover:scale-110 transition cursor-pointer">
                      {chef.icon2}
                    </div>

                    {/* ICON 3 */}
                    <div className="p-2 bg-white rounded-full shadow hover:bg-amber-600 hover:text-white hover:scale-110 transition cursor-pointer">
                      {chef.icon3}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
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

      <section
        id="reservation"
        className="bg-[#dfbeb0] py-14 px-4 md:px-6 lg:px-20"
      >
        <div className="rounded-2xl h-auto md:h-auto lg:h-[120vh] flex flex-col md:flex-col lg:flex-row gap-5 overflow-hidden">
          <div className="bg-white w-full md:w-full lg:w-[40%] rounded-2xl p-3">
            <h1
              style={{ fontFamily: "Plus Jakarta" }}
              className="text-4xl font-bold text-center my-5"
            >
              Make a Reservation
            </h1>

            <p className="text-center text-amber-950 text-[15px] md:text-[18px] lg:text-[18px]">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam quis nostrud exercitation.
            </p>

            <form className="grid grid-cols-2 mt-5 gap-4">
              <input
                type="text"
                placeholder="Fullname"
                className="col-span-2 p-4 rounded-md bg-pink-100 outline-amber-600 border-0"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="col-span-2 p-4 rounded-md bg-pink-100 outline-amber-600 border-0"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="col-span-2 p-4 rounded-md bg-pink-100 outline-amber-600 border-0"
              />

              <input
                type="date"
                className="p-4 rounded-md bg-pink-100 outline-amber-600 border-0"
              />
              <input
                type="time"
                className="p-4 rounded-md bg-pink-100 outline-amber-600 border-0"
              />

              <select className="p-4 rounded-md bg-pink-100 outline-amber-600 border-0">
                <option value="">Guests</option>
              </select>

              <select className="p-4 rounded-md bg-pink-100 outline-amber-600 border-0">
                <option value="">Occasion</option>
              </select>

              <textarea
                placeholder="Special requests or dietary requirements"
                className="col-span-2 p-4 rounded-md bg-pink-100 outline-amber-600 border-0"
              />

              <button
                className="col-span-2 p-4 rounded-md text-white text-[18px] bg-amber-600 
          hover:bg-[#d75919] transition-all duration-200 hover:-translate-y-1"
              >
                Reserve a Table
              </button>
            </form>
          </div>

          <div className="w-full md:w-full lg:w-[60%] flex flex-col items-start justify-center">
            <div className="w-full h-50 md:h-[50vh] lg:h-[70vh] overflow-hidden rounded-2xl relative group">
              <img
                src={assets.showcase2}
                alt="Reservation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:bg-black/60 z-10"></div>

              <div className="flex flex-col absolute top-16 md:top-78 lg:top-48 px-10 text-white z-20">
                <h1 className="text-2xl font-bold">Experience Fine Dining</h1>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-2 gap-3 md:gap-5 w-full mt-6">
              <div className="bg-white rounded-2xl my-2 flex flex-col px-5 py-3 transition-all duration-400 hover:-translate-y-2 ">
                <Clock
                  className="py-1 px-2 rounded-3xl bg-amber-600 text-white"
                  size={"40px"}
                />
                <h1 className="text-2xl font-bold my-2">Business Hours</h1>
                <p>Tuesday - Thursday: 5:00 PM - 10:00</p>
                <p>PM</p>
                <p>Friday - Saturday: 5:00 PM - 11:00</p>
                <p>PM</p>
                <p>Sunday: 4:00 PM - 9:00 PM</p>
              </div>
              <div className="bg-white rounded-2xl my-2 flex flex-col px-5 py-3 transition-all duration-400 hover:-translate-y-2 ">
                <MapPin
                  className="py-1 px-2 rounded-3xl bg-amber-600 text-white"
                  size={"40px"}
                />
                <h1 className="text-2xl font-bold my-2">Find Us</h1>
                <p>4567 Elm Avenue, Floor 2</p>
                <p>Chicago, IL 60614</p>
              </div>
              <div className="bg-white rounded-2xl my-2 flex flex-col px-5 py-3 transition-all duration-400 hover:-translate-y-2 ">
                <Phone
                  className="py-1 px-2 rounded-3xl bg-amber-600 text-white"
                  size={"40px"}
                />
                <h1 className="text-2xl font-bold my-2">Reservations</h1>
                <p>+1 (312) 555-9876</p>
                <p>Available daily 2:00 PM - 9:00 PM</p>
              </div>
              <div className="bg-white rounded-2xl my-2 flex flex-col px-5 py-3 transition-all duration-400 hover:-translate-y-2 ">
                <Mail
                  className="py-1 px-2 rounded-3xl bg-amber-600 text-white"
                  size={"40px"}
                />
                <h1 className="text-2xl font-bold my-2">Email us</h1>
                <p>reservations@example.com</p>
                <p>Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8EFEB] py-10 px-4 md:px-6 lg:px-20 md:min-h-screen lg:h-auto">
        <div className="flex flex-col md:flex-col lg:flex-row gap-3 my-6 ">
          <div className="rounded-2xl w-full md:w-full lg:w-[50%] overflow-hidden shadow-lg">
            <BuggyHubMap className={"h-full md:h-[300px] lg:h-full w-full"} />
          </div>

          <div className="rounded-2xl px-6 py-5 bg-white h-full">
            <h1 className="text-4xl font-bold text-center my-3">Find Us</h1>
            <p className="text-center">Visit Us today</p>
            <div className="flex gap-3 items-center mt-5 border-b pb-5 border-gray-400">
              <MapPin
                className="p-2 rounded-3xl bg-orange-300"
                color="brown"
                size={"40px"}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl">Our Location</h1>
                <p>123 Culinary Avenue, Manhattan, NY 10001</p>
              </div>
            </div>
            <div className="flex gap-3 items-center mt-5 border-b pb-5 border-gray-400">
              <Phone
                className="p-2 rounded-3xl bg-orange-300"
                color="brown"
                size={"40px"}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl">Reservations</h1>
                <i>
                  We recommend making reservations at least 48 hours in advance
                </i>
              </div>
            </div>
            <div className="flex gap-3 mt-5 border-b pb-5 border-gray-400">
              <Clock
                className="p-2 rounded-3xl bg-orange-300"
                color="brown"
                size={"40px"}
              />
              <div className="flex w-full flex-col gap-2">
                <h1 className="font-bold text-2xl">Hour</h1>
                <div className="flex  justify-between w-full">
                  <p>Monday - Thursday</p>
                  <p className="font-light">11:00 AM - 10:00 PM</p>
                </div>
                <div className="flex  justify-between w-full">
                  <p>Friday - Saturday</p>
                  <p className="font-light">11:00 AM - 11:30 PM</p>
                </div>
                <div className="flex  justify-between w-full">
                  <p>Sunday</p>
                  <p className="font-light">10:00 AM - 9:00 PM</p>
                </div>
                <div className="flex  justify-between w-full">
                  <p>Brunch Hours</p>
                  <p className="font-light">Sat & Sun, 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-5 w-full justify-evenly">
              <button className="rounded-md py-3 w-60 bg-amber-600 text-white transition-all duration-400 hover:-translate-y-2 hover:bg-amber-700">
                Make a Reservation
              </button>
              <button className="rounded-md py-3 w-60 border border-amber-600 text-amber-600 transition-all duration-400 hover:-translate-y-2 hover:bg-orange-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dfbeb0] h-[560vh] md:h-[375vh] lg:h-auto py-10 px-4 md:px-6 lg:px-20">
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold text-center mb-3"
        >
          Events
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="flex flex-col gap-6 my-4 justify-center text-center mx-auto ">
          <p className="py-2 px-3 font-bold text-white bg-amber-600 rounded-3xl w-auto mx-auto">
            LIMITED TIME
          </p>
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold w-full md:w-full lg:w-[60%] text-center text-amber-900 mx-auto">
            Autumn Harvest Festival{" "}
          </h1>
          <p className="ltext-[18px] w-full md:w-full lg:w-[60%] mx-auto">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
          <p className="py-2 px-3 font-bold text-amber-600 bg-amber-200 rounded-3xl w-auto flex gap-4 items-center  mx-auto">
            <SlCalender /> October 15 - November 30, 2024
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 mt-10 md:grid-cols-1 gap-8">
          <div className="bg-white shadow-lg h-[600px] rounded-2xl overflow-hidden relative hover:scale-103 duration-200 cursor-pointer">
            <img
              src={assets.misc3}
              className=" w-full h-70 object-cover mb-4 hover:scale-103 duration-200 translate"
            />
            <div className="flex flex-col py-5 px-5 lg:px-8 lg:py-2 gap-3">
              <h2
                className="font-bold text-3xl mb-1"
                style={{ fontFamily: "Plus Jakarta" }}
              >
                Seasonal Harvest Menu
              </h2>
              <p className="px-3 py-1 bg-white flex items-center gap-3 rounded-2xl text-[#d25212] absolute end-5 top-4">
                {" "}
                <BiStar size={"20px"} />
                CHEF's SPECIAL
              </p>
              <p className="text-[17px] text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <div className="flex justify-between mt-3">
                <p className="items-center flex gap-2  font-bold">
                  <IoMdCheckmark
                    className=" rounded-2xl bg-[#d25212] text-white p-1"
                    size={"20px"}
                  />
                  Farm-to-Table Ingredients
                </p>
              </div>
              <div className="flex justify-between">
                <p className="items-center flex gap-2 font-bold">
                  <IoMdCheckmark
                    className=" rounded-2xl bg-[#d25212] text-white p-1"
                    size={"20px"}
                  />
                  Locally Sourced Product
                </p>
              </div>
              <p className="flex items-center gap-3 text-[#d25212]">
                Explore Menu{" "}
                <FaArrowRightLong className="hover:translate-x-2 duration-300" />
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg h-[600px] rounded-2xl overflow-hidden relative hover:scale-103 duration-200 cursor-pointer">
            <img
              src={assets.misc7}
              className=" w-full h-70 object-cover mb-4 hover:scale-103 duration-200 translate"
            />
            <div className="flex flex-col py-5 px-5 lg:px-8 lg:py-2 gap-3">
              <h2
                className="font-bold text-3xl mb-1"
                style={{ fontFamily: "Plus Jakarta" }}
              >
                Wine Pairing Experience
              </h2>
              <p className="px-3 py-1 bg-white flex items-center gap-3 rounded-2xl text-[#d25212] absolute end-5 top-4">
                {" "}
                <BiStar size={"20px"} />
                CHEF's SPECIAL
              </p>
              <p className="text-[17px] text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo.
              </p>
              <div className="flex justify-between mt-3">
                <p className="items-center flex gap-2  font-bold">
                  <IoMdCheckmark
                    className=" rounded-2xl bg-[#d25212] text-white p-1"
                    size={"20px"}
                  />
                  Sommelier Curated
                </p>
              </div>
              <div className="flex justify-between">
                <p className="items-center flex gap-2 font-bold">
                  <IoMdCheckmark
                    className=" rounded-2xl bg-[#d25212] text-white p-1"
                    size={"20px"}
                  />
                  Premium Selection
                </p>
              </div>
              <p className="flex items-center gap-3 text-[#d25212]">
                Book Tasting{" "}
                <FaArrowRightLong className="hover:translate-x-2 duration-300" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-4 items-center mt-10 bg-[#dac3b9] py-9 px-7 rounded-2xl">
          <div className="flex flex-col gap-4 w-full md:w-full lg:w-[30%]">
            <h1
              className="font-bold text-5xl md:text-4xl lg:text-4xl"
              style={{ fontFamily: "Plus Jakarta" }}
            >
              Recognition & Awards
            </h1>
            <p className="text-[18px] text-gray-500">
              At enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 w-full md:w-full lg:w-[70%]">
            <div className="flex gap-4 px-5 py-6 rounded-2xl items-center bg-white transition-all duration-400 hover:-translate-y-2 ">
              <BsTrophy
                size={"40px"}
                className="rounded-xl bg-[#d25212] text-white p-2"
              />
              <div className="flex flex-col gap-1">
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Plus Jakarta" }}
                >
                  Best Reastruant 2024
                </h1>
                <p className="text-[18px] text-gray-600">City Dining Awards</p>
              </div>
            </div>
            <div className="flex gap-4 px-5 py-6 rounded-2xl items-center bg-white transition-all duration-400 hover:-translate-y-2 ">
              <BsStar
                size={"40px"}
                className="rounded-xl bg-[#d25212] text-white p-2"
              />
              <div className="flex flex-col gap-1">
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Plus Jakarta" }}
                >
                  5 Star Rating
                </h1>
                <p className="text-[18px] text-gray-600">Local Food Guide</p>
              </div>
            </div>
            <div className="flex gap-4 px-5 py-6 rounded-2xl items-center bg-white transition-all duration-400 hover:-translate-y-2 ">
              <SlDiamond
                size={"40px"}
                className="rounded-xl bg-[#d25212] text-white p-2"
              />
              <div className="flex flex-col gap-1">
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Plus Jakarta" }}
                >
                  Excellence Award
                </h1>
                <p className="text-[18px] text-gray-600">Culinary Institute</p>
              </div>
            </div>
            <div className="flex gap-4 px-5 py-6 rounded-2xl items-center bg-white transition-all duration-400 hover:-translate-y-2 ">
              <BsHeart
                size={"40px"}
                className="rounded-xl bg-[#d25212] text-white p-2"
              />
              <div className="flex flex-col gap-1">
                <h1
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Plus Jakarta" }}
                >
                  Customer Choice
                </h1>
                <p className="text-[18px] text-gray-600">Community Favorite</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-4 mt-8 h-[560px] justify-between">
          <div className="bg-white rounded-2xl py-5 px-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full md-w-full lg:w-[50%]">
            <div className="col-span-1 md:col-span-1 lg:col-span-2 flex items-center gap-8">
              <Users2
                size={70}
                className="bg-[#d25212] rounded-xl p-4 text-white"
              />
              <div className="flex flex-col gap-1">
                <h1
                  className="text-4xl font-bold"
                  style={{ fontFamily: "Plus Jakarta" }}
                >
                  Community Involvement
                </h1>
                <p className="text-gray-600 text-[18px]">
                  Supporting local farmers and charity since 2015
                </p>
              </div>
            </div>
            <div className="p-7 flex flex-col bg-[#d0a38c42] gap-4 rounded-2xl items-center justify-center text-center">
              <h1 className="text-[#d25212] text-4xl font-bold">$50k+</h1>
              <p className="text-gray-700 text-[18px]">
                Donated to Local Charities
              </p>
            </div>
            <div className="p-7 flex flex-col bg-[#d0a38c42] gap-4 rounded-2xl items-center justify-center text-center">
              <h1 className="text-[#d25212] text-4xl font-bold">25k+</h1>
              <p className="text-gray-700 text-[18px]">Local Farm Partners</p>
            </div>
            <div className="p-7 flex flex-col bg-[#d0a38c42] gap-4 rounded-2xl items-center justify-center text-center">
              <h1 className="text-[#d25212] text-4xl font-bold">100+</h1>
              <p className="text-gray-700 text-[18px]">
                Community Events Hosted
              </p>
            </div>
            <div className="p-7 flex flex-col bg-[#d0a38c42] gap-4 rounded-2xl items-center justify-center text-center">
              <h1 className="text-[#d25212] text-4xl font-bold">500+</h1>
              <p className="text-gray-700 text-[18px]">Volunteer Hours</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl py-5 px-6 flex md:mt-4 flex-col gap-4 w-full md:w-full lg:w-[50%]">
            <div className=" flex items-center gap-8 my-7">
              <Recycle
                size={70}
                className="bg-[#d25212] rounded-xl p-4 text-white"
              />
              <div className="flex flex-col gap-1">
                <h1
                  className="text-4xl font-bold"
                  style={{ fontFamily: "Plus Jakarta" }}
                >
                  Eco-Friendly Practices
                </h1>
                <p className="text-gray-600 text-[18px]">
                  Committed to sustainable dining and zero waste
                </p>
              </div>
            </div>
            <div className="flex gap-4 border-b items-center pb-5 border-gray-300 my-3">
              <Leaf size={20} color="#d25212" />
              <p className="text-[18px] font-bold">
                100% Compostable Packaging
              </p>
            </div>
            <div className="flex gap-4 border-b items-center pb-5 border-gray-300 my-3">
              <FaWater size={20} color="#d25212" />
              <p className="text-[18px] font-bold">
                Water Conservation Program
              </p>
            </div>
            <div className="flex gap-4 border-b items-center pb-5 border-gray-300 my-3">
              <BsThunderbolt size={20} color="#d25212" />
              <p className="text-[18px] font-bold">Renewable Energy Powered</p>
            </div>
            <div className="flex items-center gap-4 pb-5 my-3">
              <PiVan size={20} color="#d25212" />
              <p className="text-[18px] font-bold">Local Sourcing Priority</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="bg-[#F8EFEB] pt-14 pb-5 px-4 md:px-6  lg:px-20"
      >
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold text-center mb-3"
        >
          Gallery
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        {/* CATEGORY NAV */}
        <nav className="lg:flex lg:justify-center grid-cols-3 md:grid md:grid-cols-5 md:gap-4 gap-20 p-4 md:p-2 mb-12">
          {categories2.map((dog) => (
            <button
              key={dog}
              onClick={() => setActiveTab2(dog)}
              className={`capitalize px-6 py-2 rounded-full transition-transform duration-300 hover:scale-110
        ${
          activeTab2 === dog
            ? "bg-orange-600 text-white border-orange-600"
            : "border-gray-400 text-gray-700 hover:text-orange-600"
        }
      `}
            >
              {dog === "all"
                ? "All"
                : dog.charAt(0).toUpperCase() + dog.slice(1)}
            </button>
          ))}
        </nav>

        {/* FOOD CARDS */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">
          {displayedFood2.map((item) => (
            <div
              key={`${item.category}-${item.id}`}
              className={`mb-8 break-inside-avoid bg-white shadow-lg rounded-2xl overflow-hidden relative hover:scale-103 duration-200 cursor-pointer ${
                item.height ?? "h-[310px]"
              }`}
            >
              <img
                src={item.img}
                alt={item.name}
                className=" w-full h-[200px] object-cover mb-4"
              />
              <div className="flex flex-col p-5 lg:p-3 gap-2">
                <h2 className="font-bold text-xl mb-1">{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#dfbeb0] pt-14 pb-5 px-4 md:px-6  lg:px-20"
      >
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold text-center mb-3"
        >
          Contact
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="flex flex-col md:flex-col lg:flex-row gap-6 w-full justify-between">
          <div className="flex items-center gap-4 bg-white px-5 py-10 w-full rounded-2xl">
            <MdOutlineLocationOn
              size={40}
              color="#E07844"
              className="px-2 rounded-4xl bg-[#e58e635a]"
            />
            <div>
              <h1 className="font-bold text-2xl">Our Address</h1>
              <p className="text-[18px] text-gray-700">
                1842 Maple Avenue, Portland, Oregon 97204
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-5 py-10 w-full rounded-2xl">
            <TfiEmail
              size={40}
              color="#E07844"
              className="px-2 rounded-2xl bg-[#e58e635a]"
            />
            <div>
              <h1 className="font-bold text-2xl">Email Address</h1>
              <p className="text-[18px] text-gray-700">
                info@example.comcontact@example.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-5 py-5 w-full rounded-2xl">
            <TfiHeadphone
              size={40}
              color="#E07844"
              className="px-3 rounded-2xl bg-[#e58e635a]"
            />
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-2xl">Hours of Operation</h1>
              <div>
                <p className="text-[18px] text-gray-700">
                  Sunday-Fri: 9 AM - 6 PM
                </p>
                <p className="text-[18px] text-gray-700">
                  Sunday-Fri: 9 AM - 6 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[140vh] bg-[#F8EFEB]">
        <BuggyHubMap className={"h-full md:h-[300px] lg:h-[80vh] w-full"} />
        <form
          action=""
          className="py-5 px-4 bg-white rounded-2xl w-[60vw] mx-auto grid grid-cols-2 gap-4 border border-gray-400 absolute top-50 start-68"
        >
          <h1
            className="text-4xl font-bold text-center mb-1 grid col-span-2"
            style={{ fontFamily: "Plus Jakarta" }}
          >
            Get in Touch
          </h1>
          <div className="w-24 h-[3px] bg-[#e58e63ee] mx-auto rounded-full grid col-span-2"></div>
          <div className="relative mt-6">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-700 rounded-xl p-3 pl-12 w-full outline-[#e58e63f6]"
            />
          </div>
          <div className="relative mt-6">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-700 rounded-xl p-3 pl-12 w-full outline-[#e58e63f6]"
            />
          </div>
          <div className="relative mt-6 col-span-2">
            <AlignLeft className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-700 rounded-xl p-3 grid pl-12 w-full outline-[#e58e63f6]"
            />
          </div>
          <div className="relative mt-6 col-span-2">
            <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />

            <textarea
              placeholder="Write message..."
              rows={5}
              className="border border-gray-700 rounded-xl p-3 pl-12 w-full resize-none outline-[#e58e63f6]"
            ></textarea>
          </div>
          <button className="bg-[#c05c2a] py-3 px-9 rounded-xl font-semibold text-white mx-auto col-span-2">SEND MESSAGE</button>
        </form>
      </section>

      <footer className="bg-black lg:h-auto py-10 px-4 md:px-6 lg:px-20">
        <div className="flex justify-between text-white">
          <div className="flex flex-col gap-4 ">
            <p className="text-4xl font-bold" style={{ fontFamily: "Plus Jakarta" }}>Platia</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.</p>
            <p className="text-2xl font-bold"  style={{ fontFamily: "Plus Jakarta" }}>Stay Updated</p>
            <div>
              <input type="text" placeholder="Enter your Email" className="rounded-3xl p-3 bg-gray-800 outline-0 shadow-white shadow-sm "/>
              <button className=" "><IoPaperPlane size={30} className/></button>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
