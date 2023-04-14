// ** React Imports
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/userSlice";
import { useCookies } from "react-cookie";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

// logo
import image from "../views/assets/css/images/logo/logo.png";

// arlet
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// ====================================================================

const Login = () => {
  const handleError = () => {
    return MySwal.fire({
      title: "비밀번호나 이메일을 틀렸습니다.",
      text: " 비밀번호나 이메일을 다시 확인해 주세요",
      icon: "error",
      customClass: {
        confirmButton: "btn btn-primary",
      },
      buttonsStyling: false,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ids: "",
    passwd: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [errors, setErrors] = useState(null);
  // 자동 로그인 체크시 로그인 정보 바로 뜨게
  useEffect(() => {
    if (cookies.user) {
      const { ids, passwd } = cookies.user;
      setFormData({ ids, passwd });
      setRememberMe(true);
    }
  }, [cookies]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // 유효성 검증
    if (e.target.name === "ids" && e.target.value === "") {
      setErrors({
        ...errors,
        ids: "아이디를 입력해주세요.",
      });
    } else {
      setErrors({
        ...errors,
        ids: null,
      });
    }
    if (e.target.name === "passwd" && e.target.value === "") {
      setErrors({
        ...errors,
        passwd: "비밀번호를 입력해주세요.",
      });
    } else {
      setErrors({
        ...errors,
        passwd: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 임시 고정 UUID
    const subs = "118413609210214538557";

    try {
      const response = await axios.post(
        "/api/signin/",
        {
          ids: formData.ids,
          subs: subs,
          passwd: formData.passwd,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.result_code === 1) {
        console.log(response.data.results);
        dispatch(setUserInfo({ ids: formData.ids, subs: subs })); // 액션 디스패치

        // 세션 스토리지에 사용자 정보 저장
        const memberRes = await axios.post(
          "/api/member/",
          {
            ids: formData.ids,
            subs: subs,
            method: "INFO",
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        if (memberRes.data.result_code === 1) {
          sessionStorage.setItem(
            "user",
            JSON.stringify(memberRes.data.results)
          );
          // 기억하기 옵션 처리
          if (rememberMe) {
            setCookie(
              "user",
              { ids: formData.ids, passwd: formData.passwd },
              { path: "/" }
            );
          } else {
            removeCookie("user");
          }
          navigate("/home"); //로그인 성공 시 /home로 이동
        } else {
          console.log(memberRes.data.results);
          alert("로그인 실패");
        }
      } else {
        console.log(response.data.results);
        alert(response.data.results);
      }
    } catch (error) {
      console.log(error);
      if (error) {
        if (error.response.status === 400) {
          // 잘못된 입력값 에러 처리
          handleError();
        } else {
          // 기타 에러 처리
        }
      }
    }
  };
  //==================================================================
  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <h1 className="brand-text text-primary ms-1">
                <img src={image} width="300px"></img>
              </h1>
            </Link>

            <form className="auth--form mt-2" onSubmit={handleSubmit}>
              <div className="mb-1">
                <Label className="form-label" for="-email">
                  이메일
                </Label>
                <Input
                  type="email"
                  id="-email"
                  placeholder="john@example.com"
                  autoFocus
                  name="ids"
                  value={formData.ids}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="-password">
                    비밀번호
                  </Label>
                  <Link to="/pages/forgot-password-basic">
                    <small>비밀번호를 잊으셨나요?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="-password"
                  name="passwd"
                  value={formData.passwd}
                  onChange={handleChange}
                />
              </div>

              <div className="form-check mb-1">
                <Input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <Label className="form-check-label" for="remember-me">
                  로그인정보 기억하기
                </Label>
              </div>
              <Button color="primary" type="submit" block>
                로그인
              </Button>
            </form>
            <p className="text-center mt-2">
              <span className="me-25">아직 회원이 아니신가요?</span>
              <Link to="/pages/register-basic">
                <span>새 계정 만들기</span>
              </Link>
            </p>
            <div className="divider my-2">
              <div className="divider-text">or</div>
            </div>
            <div className="auth-footer-btn d-flex justify-content-center">
              <Button color="facebook">
                <Facebook size={14} />
              </Button>
              <Button color="twitter">
                <Twitter size={14} />
              </Button>
              <Button color="google">
                <Mail size={14} />
              </Button>
              <Button className="me-0" color="github">
                <GitHub size={14} />
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
