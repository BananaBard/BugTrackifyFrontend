import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="max-w-6xl mx-auto py-10">
      <div className="flex">
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-6xl font-semibold leading-tight pt-10">
            Welcome to BugTrackify
          </h1>
          <p className="max-w-lg pt-2 text-xl tracking-wide leading-relaxed">
            Track, manage, and resolve bugs efficiently with BugTrackify.
            Simplify your project management and ensure smooth workflows with
            our intuitive bug tracking system.
          </p>
          <div className="pt-12 flex gap-x-6 items-center">
            <Button asChild size="lg" variant="default">
              <Link to='/login'>Get Started</Link>
            </Button>
            <Button size="lg" variant="secondary">
              Try Demo
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img className='max-w-xl' src="src/assets/hero.png" alt="hero img" />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
