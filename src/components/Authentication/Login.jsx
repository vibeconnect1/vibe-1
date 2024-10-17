import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import wave from "/wave.png";
import { login, vibeLogin } from "../../api";
import { setItemInLocalStorage } from "../../utils/localStorage";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [password, showPassword] = useState(false);
  const [page, setPage] = useState("login");
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    const user = localStorage.getItem("Name");
    // console.log(user)
    if (token) {
      navigate("/dashboard");
      toast.success("You are already logged in!");
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      const response = await login({
        user: {
          email: formData.email,
          password: formData.password,
        },
      });

      const selectedSiteId = response.data.user.selected_site_id;
      const userName = response.data.user.firstname;
      setItemInLocalStorage("SITEID", selectedSiteId);
      setItemInLocalStorage("Name", userName);
      const features = response.data.features;
      setItemInLocalStorage("FEATURES", features);

      const featNames = features.map((feature) => feature.feature_name);
      // vibe login
      // if (selectedSiteId === 10) {
      if (featNames.includes("project_task")) {
        console.log("running copilot login");
        const vibeResponse = await vibeLogin({
          email: formData.email,
          password: formData.password,
        });
        console.log("vibe", vibeResponse);
        const vibeToken = vibeResponse.data.token.access.token;
        setItemInLocalStorage("VIBETOKEN", vibeToken);
        const vibeUserId = vibeResponse.data.data.user_id;
        setItemInLocalStorage("VIBEUSERID", vibeUserId);
        const vibeOrganizationId = vibeResponse.data.data.organization_id;
        setItemInLocalStorage("VIBEORGID", vibeOrganizationId);
      }

      //
      console.log("skipped copilot");
      const loginD = response.data.user;
      setItemInLocalStorage("user", loginD);
      console.log("User details", loginD);
      const userId = response.data.user.id;
      setItemInLocalStorage("UserId", userId);
      // console.log(userId)

      const unitId = response.data.user.unit_id;
      setItemInLocalStorage("UNITID", unitId);

      const building = response.data.buildings;
      setItemInLocalStorage("Building", building);
      // console.log("Buildingss-",building)

      const categories = response.data.categories;
      setItemInLocalStorage("categories", categories);
      const token = response.data.user.api_key;
      setItemInLocalStorage("TOKEN", token);

      // console.log(userName)
      const lastName = response.data.user.lastname;
      setItemInLocalStorage("LASTNAME", lastName);

      const userType = response.data.user.user_type;
      setItemInLocalStorage("USERTYPE", userType);
      const CompanyId = response.data.user.company_id;
      setItemInLocalStorage("COMPANYID", CompanyId);
      // setItemInLocalStorage("HRMSORGID", 4);
      setItemInLocalStorage("HRMSORGID", 2);
      // console.log(userType)

      const statuses = response.data.statuses;
      setItemInLocalStorage("STATUS", statuses);
      // console.log("Status", statuses)

      const complaint = response.data.complanits;
      setItemInLocalStorage("complaint", complaint);

      // console.log(userName)
      // console.log("Sit",selectedSiteId)
      toast.loading("Processing your data please wait...");
      if (userType === "pms_admin") {
        navigate("/dashboard");
      } else {
        navigate(selectedSiteId === 10 ? "/employee/dashboard" : "/mytickets");
      }
      toast.dismiss();
      window.location.reload();
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const togglePassword = () => {
    showPassword(!password);
  };

  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        background: "blur",
        opacity: 0.9,
      }}
    >
      <div className=" rounded-md  ">
        <h1 className="text-3xl text-white  p-2 px-10 font-semibold jersey-15-regular ">
          VIBE CONNECT
        </h1>
      </div>
      <div className=" flex justify-center  h-[90vh] items-center">
        <div className="bg-white border-2 border-white w-[30rem] rounded-xl max-h-full p-5 shadow-2xl">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <form onSubmit={onSubmit} className="m-2 flex flex-col gap-4 w-full ">
            <div className="flex flex-col gap-2 mx-5">
              <label htmlFor="email" className="font-medium">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" rounded-sm p-1 px-2 border border-black"
                placeholder="example@company.com"
                onChange={onChange}
                value={formData.email}
              />
            </div>
            {page === "login" && (
              <div className="flex flex-col gap-2 relative mx-5">
                <label htmlFor="password" className="font-medium">
                  Password:
                </label>
                <input
                  name="password"
                  id="password"
                  className="rounded-sm p-1 px-2 border border-black"
                  placeholder="**********"
                  type={password ? "text" : "password"}
                  onChange={onChange}
                  value={formData.password}
                />
                <div className="p-1 rounded-full  absolute top-12 right-2 transform -translate-y-1/2 cursor-pointer font">
                  {password ? (
                    <AiFillEye onClick={togglePassword} />
                  ) : (
                    <AiFillEyeInvisible onClick={togglePassword} />
                  )}
                </div>
              </div>
            )}
            <div className="mx-5 flex gap-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="">
                Remember Me
              </label>
            </div>
            <div className="flex justify-center gap-4 w-full">
              {page === "login" && (
                <button
                  type="submit"
                  className="w-20 my-2 bg-black text-white p-1 rounded-md text-xl font-bold hover:bg-gray-300 "
                >
                  Login
                </button>
              )}
              <p
                onClick={() => setPage("sso")}
                className="w-20 my-2 border-black border-2 p-1 cursor-pointer text-center rounded-md text-xl font-medium hover:bg-gray-300 "
              >
                {page === "sso" ? "Submit" : "SSO"}
              </p>
            </div>
            {page === "sso" && (
              <p
                className="text-center cursor-pointer hover:text-blue-400"
                onClick={() => setPage("login")}
              >
                Login
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
