import { useContext, useState } from "react";
import axios from "axios";
function LoginForm() {
  const [formData, setFormData] = useState({
    ids: "",
    subs: "",
    passwd: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/signin/",
        {
          ids: formData.ids,
          subs: formData.subs,
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
        window.location.href = "/home";
      } else {
        console.log(response.data.results);
        alert(response.data.results);
      }
    } catch (error) {
      console.log(error);
      console.log("sadffdfdassdasdffdsaasd");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          name="ids"
          value={formData.ids}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        UUID:
        <input
          type="text"
          name="subs"
          value={formData.subs}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="passwd"
          value={formData.passwd}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
