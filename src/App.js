import "./App.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useState } from "react";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [EditBtn, setEditBtn] = React.useState(false);
  const onClick = () => {
    setEditBtn((current) => !current);
  };
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
        { i: "c", x: 0, y: 2, w: 6, h: 2, minW: 1, maxW: 12, minH: 1, maxH: 4 },
        { i: "d", x: 6, y: 2, w: 6, h: 1, minW: 1, maxW: 12, minH: 1, maxH: 4 },
        { i: "e", x: 6, y: 2, w: 6, h: 1, minW: 1, maxW: 12, minH: 1, maxH: 4 },
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
  return (
    <div>
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
          <h1>광고1</h1>
        </div>
        <div className="ad2" key="c">
          <h1>광고2</h1>
        </div>
        <div className="ad3" key="d">
          <h1>광고3</h1>
        </div>
        <div className="ad4" key="e">
          <h1>광고4</h1>
        </div>
      </ResponsiveGridLayout>
      <button onClick={onClick}>
        <h1>{EditBtn ? "저장하기" : "수정하기"}</h1>
      </button>
    </div>
  );
}

export default App;
