import { Outlet } from "react-router-dom";
import {
  MonthPeriod,
  StatisticsPageNav,
  ToolBarWrapper,
} from "../modules/statisticsPage";
import { PageWrapper } from "../shared/components";

const StatisticsPage = () => {
  return (
    <PageWrapper>
      <ToolBarWrapper>
        <StatisticsPageNav />
        <MonthPeriod />
      </ToolBarWrapper>
      <Outlet />
    </PageWrapper>
  );
};

export default StatisticsPage;
