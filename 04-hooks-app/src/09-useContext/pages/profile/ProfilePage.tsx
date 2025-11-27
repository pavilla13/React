import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { Link } from "react-router";

const ProfilePage = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-center">
      <h1 className="text-4xl">Perfil de usuario</h1>
      <hr />
      <pre className="my-4 w-[75%] overflow-x-auto">
        {JSON.stringify(user, null, 2)}
      </pre>
      <Link to="/about">
        <Button
          variant="ghost"
          className="text-destructive hover:text-destructive hover:bg-destructive/10 cursor-pointer"
          onClick={logout}
        >
          Salir
        </Button>
      </Link>
    </div>
  );
};

export default ProfilePage;
