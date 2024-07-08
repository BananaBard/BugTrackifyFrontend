import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { ModeToggle } from "../../ModeToggle";
import { buttonVariants } from "../../ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h2>🐞 BugTrackify</h2>
        <NavigationMenu className="flex justify-evenly items-center gap-8">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">Home</Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          {
            user && (
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/dashboard">Dashboard</Link>
                </NavigationMenuItem>
              </NavigationMenuList>

            )
          }
        </NavigationMenu>
        <div className="flex gap-x-6">
          <Link to="/signup" className={buttonVariants({ variant: "outline" })}>
            Get Started
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
