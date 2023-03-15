import "./App.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useState } from "react";

//Modal======================================================================
import Modal from "./commons/components/Modals/Modal";
// =========================================================================
import "../../src/views/assets/css/home.scss";

import EditBtn from "../@core/layouts/components/navbar/UserDropdown";

// Swiper====================================================================
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCreative,
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//===========================================================================
SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  const [EditBtn, setEditBtn] = React.useState(false);
  const onClick = () => {
    setEditBtn((current) => !current);
  };
  console.log(EditBtn);
  // responsive grid에 필요한 state
  const [state, setState] = useState({
    breakpoints: "lg",
    layouts: {
      lg: [
        {
          i: "a",
          x: 0,
          y: 0,
          w: 12,
          h: 2,
          minW: 1,
          maxW: 12,
          minH: 1,
          maxH: 4,
        },
        {
          i: "b",
          x: 0,
          y: 1,
          w: 12,
          h: 2,
          minW: 1,
          maxW: 12,
          minH: 1,
          maxH: 4,
        },
        { i: "c", x: 0, y: 2, w: 6, h: 4, minW: 1, maxW: 12, minH: 1, maxH: 4 },
        { i: "d", x: 6, y: 2, w: 6, h: 1, minW: 1, maxW: 12, minH: 1, maxH: 4 },
        { i: "e", x: 6, y: 2, w: 6, h: 3, minW: 1, maxW: 12, minH: 1, maxH: 4 },
      ],
    },
  });

  // grid-layout 변경 시 사용
  const onLayoutChange = (layout, layouts) => {
    console.log("layouts", layouts, layout);
    setState((state) => ({
      ...state,
      layouts: layouts,
    }));
  };

  // breakpoint 변경
  const onBreakPointChange = (breakpoint) => {
    // console.log(breakpoint) // lg or md or sm or xs or xxs
    setState((state) => ({
      ...state,
      breakpoints: breakpoint,
    }));
  };

  //Swiper ===================================================================================================
  const swiperBanner = [
    {
      src: "https://cdn.wadiz.kr/ft/images/green001/2021/0423/20210423181640870_72.jpg/wadiz/format/jpg/quality/80/",
    },
    {
      src: "https://cdn.wadiz.kr/ft/images/green001/2021/0423/20210423181729546_79.jpg/wadiz/format/jpg/quality/80/",
    },
    {
      src: "https://cdn.wadiz.kr/ft/images/green001/2021/0422/20210422180040276_79.jpg/wadiz/format/jpg/quality/80/",
    },
    {
      src: "https://cdn.wadiz.kr/ft/images/green001/2021/0507/20210507145746388_26.png/wadiz/format/jpg/quality/80/",
    },
    {
      src: "https://cdn.wadiz.kr/ft/images/green001/2021/0422/20210422183235453_61.jpeg/wadiz/format/jpg/quality/80/",
    },
  ];
  //===================================================================================================

  // Modal ===================================================================================================
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    if (EditBtn === false) {
      setModalOpen(true);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal2 = () => {
    if (EditBtn === false) {
      setModalOpen2(true);
    }
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };
  //===================================================================================================
  return (
    <div>
      <React.Fragment>
        <ResponsiveGridLayout
          className="layout"
          layouts={state.layouts}
          breakpoints={{
            lg: 1200,
            md: 996,
            sm: 768,
            xs: 480,
            xxs: 0,
          }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakPointChange}
          isResizable={EditBtn}
          isDraggable={EditBtn}
        >
          <div className="main" key="a">
            <iframe
              src="https://www.youtube.com/embed/0LVe781OoQI?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="ad1" key="b">
            <Swiper
              className="b_img"
              modules={[EffectFade, Pagination, Autoplay, EffectCreative]}
              effect={"slide"}
              loop={true}
              // navigation
              // pagination={{ clickable: true }}
              scrollbar={{ draggable: false }}
              autoplay={{ delay: 3000 }}
            >
              {swiperBanner.map((item, idx) => {
                return (
                  <SwiperSlide className="banner" key={idx}>
                    <img className="b_img" src={item.src} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="ad2" key="c">
            <img
              className="b_img"
              src="https://image-se.ycrowdy.com/20210624/CROWDY_202106241006110658_Gyj7L.png"
            ></img>
          </div>
          <div className="ad3" key="d" onClick={openModal2}>
            <img
              className="b_img"
              src="https://image-se.ycrowdy.com/20210624/CROWDY_202106241006110658_Gyj7L.png"
            ></img>
          </div>
          <div className="ad4" key="e" onClick={openModal}>
            <img
              className="b_img"
              src="https://cdn.wadiz.kr/ft/images/green001/2020/1025/20201025235147078_2.jpg/wadiz/format/jpg/quality/80/"
            ></img>
          </div>
        </ResponsiveGridLayout>
      </React.Fragment>
      <button onClick={onClick}>
        <h1>{EditBtn ? "저장하기" : "수정하기"}</h1>
      </button>
      <React.Fragment>
        {/* <button onClick={openModal}>모달팝업</button> */}
        <Modal open={modalOpen} close={closeModal} header="ad4">
          {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 */}
          ad4
        </Modal>
        <Modal open={modalOpen2} close={closeModal2} header="ad3">
          {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 */}
          <iframe
            src="https://www.youtube.com/embed/Be836ydXEuc?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="m-ad3"
          ></iframe>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default Home;

// const Home = () => {
//   return <h1>fdfasdfdasfasdfdfadsd</h1>;
// };

// export default Home;
