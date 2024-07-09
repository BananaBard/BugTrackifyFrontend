import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { ModeToggle } from "../../ModeToggle";
import { Button, buttonVariants } from "../../ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user, signOut } = useAuth();
  console.log('is user logged: ', user)
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
            (user != null) && (
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/dashboard">Dashboard</Link>
                </NavigationMenuItem>
              </NavigationMenuList>

            )
          }

        </NavigationMenu>
        <div className="flex gap-x-6">
          {
            (user === null) ? (
              <>
                <Link to="/signup" className={buttonVariants({ variant: "default" })}>
                  Get Started
                </Link>
                <Link to="/login" className={buttonVariants({ variant: "outline" })}>
                  Log in
                </Link>
              </>
            ) :
              <Button variant='outline' onClick={signOut}>
                Sign Out
              </Button>
          }

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
