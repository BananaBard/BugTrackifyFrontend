import DashboardBreadcrum from "@/components/DashboardBreadcrum";
import useHistory from "@/hooks/onUseHistory";

export const StatisticsPage = () => {
  const history = useHistory();

  return (
    <main className='p-8 w-full h-screen bg-neutral-100 dark:bg-neutral-800'>
      <DashboardBreadcrum history={history}/>
      <h1 className="text-2xl mb-4">Statistics</h1>
    </main>
  );
};

export default StatisticsPage