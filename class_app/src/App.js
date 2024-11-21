import axios from "axios";
import { useEffect } from "react";
import { getData, getToken } from "./redux/getdata/action";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const token = useSelector((state) => state.data.token);
  const data = useSelector((state) => state.data.data);

  const dispatch = useDispatch();
  const get_Token = async () => {
    axios
      .post("http://thucpham-api.ketnoith.com/api/login", {
        email: "hiep@ketnoith.com",
        password: "123456",
      })
      .then(function (response) {
        dispatch(getToken(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const get_Data = async () => {
    axios
      .get("http://thucpham-api.ketnoith.com/api/lead-source", {
        headers: {
          Authorization: `Bearer ${token?.data?.result?.access_token}`,
        },
      })
      .then(function (response) {
        console.log(response.data.result);
        dispatch(getData(response));
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    get_Token();
  }, []);
  useEffect(() => {
    get_Data();
  }, [token]);
  if (!data) {
    return;
  }
  return (
    <div>
      {" "}
      {data.data.result.map((obj) => {
        return (
          <ul>
            <li>{obj.id}</li>
            <li>{obj.name}</li>
            <li>{obj.leadCount}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default App;
