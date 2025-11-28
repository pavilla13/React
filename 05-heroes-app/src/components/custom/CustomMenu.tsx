import {
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link, useLocation } from "react-router";
import { NavigationMenu, NavigationMenuItem } from "../ui/navigation-menu";

const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-x-4">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`bg-slate-200 rounded-md p-2 ${
              isActive("/") ? "text-blue-600 font-bold" : ""
            }`}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={`bg-slate-200 rounded-md p-2 ${
              isActive("/search") ? "text-blue-600 font-bold" : ""
            }`}
          >
            <Link to="/search">Buscar</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CustomMenu;
