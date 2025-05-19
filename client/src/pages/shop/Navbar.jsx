import { navItems } from "@/components/helper";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "@/components/store/auth/auth.slice";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, user }) => {
  console.log(isAuthenticated, user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUserLogout = () => {
    dispatch(logoutUserAction());
  };

  const handleUserLogin = () => {
    navigate("/auth/login");
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
            <div className="border-2 rounded-full size-12 bg-gray-600 border-yellow-600 overflow-hidden">
              <img
                src={user?.image}
                alt={user?.name}
                className="object-cover"
              />
            </div>
            <h5 className="text-sm text-yellow-600 font-bold">
              {user?.name.slice(0, 2).capitalize()}
            </h5>
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
