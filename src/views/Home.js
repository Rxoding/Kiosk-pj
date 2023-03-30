import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useState, useEffect } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

//Modal======================================================================
import Modal from "./commons/components/Modals/Modal";
// =========================================================================
import "../../src/views/assets/css/home.scss";

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

// Arrow=====================================================================
import {
  ArrowDown,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Layout,
} from "react-feather";
import { layouts } from "chart.js";
//===========================================================================

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar]);

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  // EditBtn
  let EditBtn = localStorage.getItem("edit");
  EditBtn = JSON.parse(EditBtn);
  // console.log("Home 에딧", EditBtn);

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
          h: 3,
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
        { i: "c", x: 0, y: 2, w: 6, h: 2, minW: 1, maxW: 12, minH: 1, maxH: 4 },
        { i: "d", x: 6, y: 2, w: 6, h: 1, minW: 1, maxW: 12, minH: 1, maxH: 4 },
        { i: "e", x: 6, y: 2, w: 6, h: 1, minW: 1, maxW: 12, minH: 1, maxH: 4 },
      ],
    },
  });

  // console.log("원래 자리 :", state.layouts);
  // let states = localStorage.setItem("state", JSON.stringify(state.layouts));
  let states = localStorage.getItem("state");
  states = JSON.parse(states);
  localStorage.setItem("state", JSON.stringify(states));

  if (states == null) {
    localStorage.setItem("state", JSON.stringify(state.layouts));
  } else {
    localStorage.setItem("state", JSON.stringify(states));
  }

  // grid-layout 변경 시 사용
  const onLayoutChange = (layout, layouts) => {
    console.log("layouts :", layouts, "layout :", layout);
    // console.log("레이아웃따로", states.lg[0].y);
    // console.log("레이아웃 타입", layout[0].w);
    setState((state) => ({
      ...state,
      layouts: layouts,
    }));
    localStorage.setItem("state", JSON.stringify(layouts));
  };
  // let states = localStorage.getItem("state");
  // states = JSON.parse(states);

  // const onLayoutChange = (layout, layouts) => {
  //   const newLayout = [...state];
  //   newLayout = layouts;
  //   setState(newLayout);
  //   localStorage.setItem("state", JSON.stringify(layouts));
  // };

  //Arrow
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(states));
    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));
  }, states);

  const arrowUp = () => {
    const statesA = states.lg.find((item) => item.i === "a");
    const statesB = states.lg.find((item) => item.i === "b");
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesA.y === 2 && statesB.y === 0) {
      statesA.y = 0;
      statesB.y = 3;
      statesC.y = 5;
      statesD.y = 5;
      statesE.y = 6;
    } else if (statesA.y === 2 && statesB.y === 5) {
      statesA.y = 0;
      statesB.y = 5;
      statesC.y = 3;
      statesD.y = 3;
      statesE.y = 4;
    } else if (statesA.y === 4 && statesB.y === 0) {
      statesA.y = 2;
      statesB.y = 0;
      statesC.y = 5;
      statesD.y = 5;
      statesE.y = 6;
    } else if (statesA.y === 4 && statesB.y === 2) {
      statesA.y = 2;
      statesB.y = 5;
      statesC.y = 0;
      statesD.y = 0;
      statesE.y = 1;
    } else alert("더이상 움직일 수 없습니다.");

    localStorage.setItem("state", JSON.stringify(states));
    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));

    console.log("화살표3", state);
  };

  const arrowDown = () => {
    const statesA = states.lg.find((item) => item.i === "a");
    const statesB = states.lg.find((item) => item.i === "b");
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesA.y === 0 && statesB.y === 3) {
      statesA.y = 2;
      statesB.y = 0;
      statesC.y = 5;
      statesD.y = 5;
      statesE.y = 6;
    } else if (statesA.y === 0 && statesB.y === 5) {
      statesA.y = 2;
      statesB.y = 5;
      statesC.y = 0;
      statesD.y = 0;
      statesE.y = 1;
    } else if (statesA.y === 2 && statesB.y === 0) {
      statesA.y = 4;
      statesB.y = 0;
      statesC.y = 2;
      statesD.y = 2;
      statesE.y = 3;
    } else if (statesA.y === 2 && statesB.y === 5) {
      statesA.y = 4;
      statesB.y = 2;
      statesC.y = 0;
      statesD.y = 0;
      statesE.y = 1;
    } else alert("더이상 움직일 수 없습니다.");

    setState((state) => ({
      ...state,
      layouts: states,
    }));
    localStorage.setItem("state", JSON.stringify(states));
    states = localStorage.getItem("state");
    states = JSON.parse(states);
  };

  const arrowUpad1 = () => {
    const statesA = states.lg.find((item) => item.i === "a");
    const statesB = states.lg.find((item) => item.i === "b");
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesB.y === 3) {
      statesA.y = 2;
      statesB.y = 0;
      statesC.y = 5;
      statesD.y = 5;
      statesE.y = 6;
    } else if (statesB.y === 5 && statesA.y === 0) {
      statesA.y = 0;
      statesB.y = 3;
      statesC.y = 5;
      statesD.y = 5;
      statesE.y = 6;
    } else if (statesB.y === 5 && statesA.y === 2) {
      statesA.y = 4;
      statesB.y = 2;
      statesC.y = 0;
      statesD.y = 0;
      statesE.y = 1;
    } else if (statesB.y === 2) {
      statesA.y = 4;
      statesB.y = 0;
      statesC.y = 2;
      statesD.y = 2;
      statesE.y = 3;
    } else alert("더이상 움직일 수 없습니다.");
    setState((state) => ({
      ...state,
      layouts: states,
    }));
    localStorage.setItem("state", JSON.stringify(states));

    states = localStorage.getItem("state");
    states = JSON.parse(states);
  };

  const arrowDownad1 = () => {
    const statesA = states.lg.find((item) => item.i === "a");
    const statesB = states.lg.find((item) => item.i === "b");
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesB.y === 0 && statesA.y === 2) {
      statesA.y = 0;
      statesB.y = 3;
      statesC.y = 5;
      statesD.y = 5;
      statesE.y = 6;
    } else if (statesB.y === 3) {
      statesA.y = 0;
      statesB.y = 5;
      statesC.y = 3;
      statesD.y = 3;
      statesE.y = 4;
    } else if (statesB.y === 0 && statesA.y === 4) {
      statesA.y = 4;
      statesB.y = 2;
      statesC.y = 0;
      statesD.y = 0;
      statesE.y = 1;
    } else if (statesB.y === 2) {
      statesA.y = 2;
      statesB.y = 5;
      statesC.y = 0;
      statesD.y = 0;
      statesE.y = 1;
    } else alert("더이상 움직일 수 없습니다.");
    localStorage.setItem("state", JSON.stringify(states));
    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));
  };

  const arrowRight = () => {
    const statesA = states.lg.find((item) => item.i === "a");
    const statesB = states.lg.find((item) => item.i === "b");
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesC.x === 0) {
      statesC.x = 6;
      statesD.x = 0;
      statesE.x = 0;
    } else alert("더이상 움직일 수 없습니다.");
    localStorage.setItem("state", JSON.stringify(states));

    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));
  };

  const arrowLeft = () => {
    const statesA = states.lg.find((item) => item.i === "a");
    const statesB = states.lg.find((item) => item.i === "b");
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesC.x === 6) {
      statesC.x = 0;
      statesD.x = 6;
      statesE.x = 6;
    } else alert("더이상 움직일 수 없습니다.");
    localStorage.setItem("state", JSON.stringify(states));
    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));
  };

  const arrowUpad2 = () => {
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesC.y === 0) {
      statesD.y = 0;
      statesE.y = 1;
    } else if (statesC.y === 2) {
      statesD.y = 2;
      statesE.y = 3;
    } else if (statesC.y === 5) {
      statesD.y = 5;
      statesE.y = 6;
    } else if (statesC.y === 3) {
      statesD.y = 3;
      statesE.y = 4;
    }
    localStorage.setItem("state", JSON.stringify(states));

    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));
  };

  const arrowDownad2 = () => {
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesC.y === 0) {
      statesD.y = 1;
      statesE.y = 0;
    } else if (statesC.y === 2) {
      statesD.y = 3;
      statesE.y = 2;
    } else if (statesC.y === 5) {
      statesD.y = 6;
      statesE.y = 5;
    } else if (statesC.y === 3) {
      statesD.y = 4;
      statesE.y = 3;
    }
    localStorage.setItem("state", JSON.stringify(states));
    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));
  };

  const arrowUpad3 = () => {
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesC.y === 0) {
      statesD.y = 1;
      statesE.y = 0;
    } else if (statesC.y === 2) {
      statesD.y = 3;
      statesE.y = 2;
    } else if (statesC.y === 5) {
      statesD.y = 6;
      statesE.y = 5;
    } else if (statesC.y === 3) {
      statesD.y = 4;
      statesE.y = 3;
    }
    localStorage.setItem("state", JSON.stringify(states));

    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));
  };

  const arrowDownad3 = () => {
    const statesC = states.lg.find((item) => item.i === "c");
    const statesD = states.lg.find((item) => item.i === "d");
    const statesE = states.lg.find((item) => item.i === "e");
    if (statesC.y === 0) {
      statesD.y = 0;
      statesE.y = 1;
    } else if (statesC.y === 2) {
      statesD.y = 2;
      statesE.y = 3;
    } else if (statesC.y === 5) {
      statesD.y = 5;
      statesE.y = 6;
    } else if (statesC.y === 3) {
      statesD.y = 3;
      statesE.y = 4;
    }
    localStorage.setItem("state", JSON.stringify(states));
    states = localStorage.getItem("state");
    states = JSON.parse(states);
    setState((state) => ({
      ...state,
      layouts: states,
    }));
  };

  // breakpoint 변경
  const onBreakPointChange = (breakpoint) => {
    console.log("breakpoint :", breakpoint); // lg or md or sm or xs or xxs
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
          // layouts={state.layouts}
          layouts={states}
          breakpoints={{
            lg: 1200,
            md: 996,
            sm: 768,
            xs: 480,
            xxs: 0,
          }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          // rowHeight={150}
          width={1000}
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakPointChange}
          // isResizable={EditBtn}
          isResizable={false}
          // isDraggable={EditBtn}
          isDraggable={false}
        >
          <div className="main" key="a">
            {/* <iframe
              src="https://www.youtube.com/embed/0LVe781OoQI?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe> */}
            <ArrowDown
              className={EditBtn == false ? "arrow hidden" : "arrow"}
              size={50}
              onClick={arrowDown}
            />
            <ArrowUp
              className={EditBtn == false ? "arrow_u hidden" : "arrow_u"}
              size={50}
              onClick={arrowUp}
            />
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
            <ArrowDown
              className={EditBtn == false ? "arrow hidden" : "arrow"}
              size={50}
              onClick={arrowDownad1}
            />
            <ArrowUp
              className={EditBtn == false ? "arrow_u hidden" : "arrow_u"}
              size={50}
              onClick={arrowUpad1}
            />
          </div>
          <div className="ad2" key="c">
            <img
              className="b_img"
              src="https://image-se.ycrowdy.com/20210624/CROWDY_202106241006110658_Gyj7L.png"
            ></img>
            <ArrowRight
              className={EditBtn == false ? "arrow hidden" : "arrow"}
              size={50}
              onClick={arrowRight}
            />
            <ArrowLeft
              className={EditBtn == false ? "arrow_l hidden" : "arrow_l"}
              size={50}
              onClick={arrowLeft}
            />
          </div>
          <div className="ad3" key="d" onClick={openModal2}>
            <img
              className="b_img"
              src="https://image-se.ycrowdy.com/20210624/CROWDY_202106241006110658_Gyj7L.png"
            ></img>
            <ArrowDown
              className={EditBtn == false ? "arrow hidden" : "arrow"}
              size={50}
              onClick={arrowDownad2}
            />
            <ArrowUp
              className={EditBtn == false ? "arrow_u hidden" : "arrow_u"}
              size={50}
              onClick={arrowUpad2}
            />
          </div>
          <div className="ad4" key="e" onClick={openModal}>
            <img
              className="b_img"
              src="https://cdn.wadiz.kr/ft/images/green001/2020/1025/20201025235147078_2.jpg/wadiz/format/jpg/quality/80/"
            ></img>
            <ArrowDown
              className={EditBtn == false ? "arrow hidden" : "arrow"}
              size={50}
              onClick={arrowDownad3}
            />
            <ArrowUp
              className={EditBtn == false ? "arrow_u hidden" : "arrow_u"}
              size={50}
              onClick={arrowUpad3}
            />
          </div>
        </ResponsiveGridLayout>
      </React.Fragment>
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
