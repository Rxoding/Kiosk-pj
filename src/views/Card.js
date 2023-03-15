// ** React Imports
import { Fragment } from "react";

// ** Hooks
import { useRTL } from "@hooks/useRTL";

// ** Third Party Components
import SwiperCore, {
  Grid,
  Lazy,
  Virtual,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
} from "swiper";

// ** Demo Components

import SwiperAutoplay from "./Swiper";

import ExtensionsHeader from "@components/extensions-header";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/swiper/swiper.scss";

// ** Init Swiper Functions
SwiperCore.use([
  Navigation,
  Grid,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual,
]);

const Slider = () => {
  // ** Hooks
  const [isRtl] = useRTL();

  return (
    <Fragment>
      <ExtensionsHeader
        title="Swiper"
        subTitle="Swiper is the most modern free mobile touch slider"
        link="https://swiperjs.com/"
      />
      <Row>
        <Col sm="12">
          <SwiperAutoplay isRtl={isRtl} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Slider;
