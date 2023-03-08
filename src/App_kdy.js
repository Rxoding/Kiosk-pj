import "./App.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useEffect, useState } from "react";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [EditBtn, setEditBtn] = React.useState(false);

  const [layouts, setLayouts] = useState({
    lg: [
      // x : cols를 나눈 기준으로 왼쪽부터 0, 1 ,2...
      // y : 맨위부터 0,1,2...
      {
        i: "a",
        x: 0,
        y: 0,
        w: 4,
        h: 2,
        minW: 1,
        maxW: 4,
        minH: 1,
        maxH: 2,
        isDraggable: EditBtn,
        isResizable: EditBtn,
      },
      {
        i: "b",
        x: 0,
        y: 1,
        w: 4,
        h: 2,
        minW: 1,
        maxW: 4,
        minH: 1,
        maxH: 2,
        isDraggable: EditBtn,
        isResizable: EditBtn,
      },
      {
        i: "c",
        x: 0,
        y: 2,
        w: 2,
        h: 2,
        minW: 1,
        maxW: 4,
        minH: 1,
        maxH: 2,
        isDraggable: EditBtn,
        isResizable: EditBtn,
      },
      {
        i: "d",
        x: 2,
        y: 2,
        w: 2,
        h: 1,
        minW: 1,
        maxW: 2,
        minH: 1,
        maxH: 1,
        isDraggable: EditBtn,
        isResizable: EditBtn,
      },
      {
        i: "e",
        x: 2,
        y: 2,
        w: 2,
        h: 1,
        minW: 1,
        maxW: 2,
        minH: 1,
        maxH: 1,
        isDraggable: EditBtn,
        isResizable: EditBtn,
      },
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2 },
      { i: "b", x: 0, y: 1, w: 2, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2 },
      { i: "c", x: 0, y: 2, w: 1, h: 2, minW: 1, maxW: 2, minH: 1, maxH: 2 },
      { i: "d", x: 2, y: 2, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 },
      { i: "e", x: 2, y: 2, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 },
    ],
  });

  useEffect(() => {
    setLayouts(layouts);
  }, [layouts]);

  const onClick = () => {
    if (EditBtn) {
      console.log(layouts);
    }
    setEditBtn((currnet) => !currnet);
  };

  const onLayoutChange = (layout, layouts) => {
    setLayouts(layouts);
  };

  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts.lg}
        breakpoints={{ lg: 1000, md: 600 }}
        cols={{ lg: 4, md: 2 }}
        isDraggable={EditBtn}
        isResizable={EditBtn}
        onLayoutChange={onLayoutChange}
        draggableHandle=".drag-hadler"
      >
        <div
          className="drag-hadler main"
          key="a"
          data-grid={{ x: 0, y: 0, w: 4, h: 2 }}
        >
          <iframe
            src="https://www.youtube.com/embed/0LVe781OoQI?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div
          className="drag-hadler ad1"
          key="b"
          data-grid={{ x: 0, y: 1, w: 4, h: 2 }}
        >
          <h1 className="drag-hadler">광고1</h1>
        </div>
        <div
          className="drag-hadler ad2"
          key="c"
          data-grid={{ x: 0, y: 2, w: 2, h: 2 }}
        >
          <h1 className="drag-hadler">광고2</h1>
        </div>
        <div
          className="drag-hadler ad3"
          key="d"
          data-grid={{ x: 2, y: 2, w: 2, h: 1 }}
        >
          <h1 className="drag-hadler">광고3</h1>
        </div>
        <div
          className="drag-hadler ad4"
          key="e"
          data-grid={{ x: 2, y: 2, w: 2, h: 1 }}
        >
          <h1 className="drag-hadler">광고4</h1>
        </div>
      </ResponsiveGridLayout>
      <button onClick={onClick}>
        <h1>{EditBtn ? "저장하기" : "수정하기"}</h1>
      </button>
    </div>
  );
}

export default App;
