import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  CategoriesList,
  ExpensesList,
  MonthPeriod,
  StatisticsPageNav,
  ToolBarWrapper,
} from "../modules/statisticsPage";
import { PageWrapper } from "../shared/components";

const StatisticsPage = () => {
  const [monthDate, setMonthDate] = useState(() => new Date());
  return (
    <PageWrapper>
      <ToolBarWrapper>
        <StatisticsPageNav />
        <MonthPeriod setDate={setMonthDate} date={monthDate} />
      </ToolBarWrapper>
      <Routes>
        <Route
          path="transactions"
          element={<ExpensesList date={monthDate} />}
        />
        <Route
          path="categories"
          element={<CategoriesList date={monthDate} />}
        />
      </Routes>
    </PageWrapper>
  );
};

export default StatisticsPage;
