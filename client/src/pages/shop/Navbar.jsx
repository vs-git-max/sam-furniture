import { navItems } from "@/components/helper";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "@/components/store/auth/auth.slice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  console.log("Is Auth", isAuthenticated, "User", user);

  const dispatch = useDispatch();

  const handleUserLogout = () => {
    dispatch(logoutUserAction());
  };

  const handleUserLogin = () => {
    navigate("/auth/login");
  };

  const splitName = (fullName) => {
    const dividedName = fullName.split(" ");

    const firstName = dividedName[0] || " ";
    const lastName = dividedName[1] || " ";

    const initials = (firstName[0] + lastName[0]).toUpperCase();

    return initials;
  };

  return (
    <div className="flex items-center  justify-between w-full  p-5">
      <div className="font-bold text-xl text-yellow-600 ">Y.S.F.W </div>
      <div className="flex justify-between gap-4">
        {navItems.map((item) => (
          <a
            href={item.link}
            key={item.id}
            className="text-yellow-600 font-bold text-xl"
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3">
        {isAuthenticated && (
          <div className="flex items-center gap-1  cursor-pointer">
            <div className="border-2 rounded-full size-12 bg-gray-600 border-yellow-600 overflow-hidden flex items-center justify-center">
              <h5 className="text-sm text-yellow-600 font-bold">
                {splitName(user?.name)}
              </h5>
            </div>
          </div>
        )}

        <Button
          className="bg-transparent border-2 text-xl text-yellow-600 border-yellow-600 hover:bg-yellow-800 hover:text-green-950 rounded-xl px-3 py-1.5 font-bold cursor-pointer transition-all duration-300"
          onClick={isAuthenticated ? handleUserLogout : handleUserLogin}
        >
          {isAuthenticated ? "Logout" : "Signup"}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
