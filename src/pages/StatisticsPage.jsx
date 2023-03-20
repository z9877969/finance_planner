import { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useCategories from "shared/hooks/useCategories";
import {
  CategoriesList,
  ExpensesList,
  MonthPeriod,
  StatisticsPageNav,
  ToolBarWrapper,
} from "modules/statisticsPage";
import { PageWrapper } from "shared/components";

const StatisticsPage = () => {
  const categories = useCategories();
  const [monthDate, setMonthDate] = useState(() => new Date());

  const categoriesMap = useMemo(() => {
    return categories.reduce((acc, el) => {
      acc[el.name] = el.title;
      return acc;
    }, {});
  }, [categories]);

  return (
    <PageWrapper>
      <ToolBarWrapper>
        <StatisticsPageNav />
        <MonthPeriod setDate={setMonthDate} date={monthDate} />
      </ToolBarWrapper>
      <Routes>
        <Route
          path="transactions"
          element={
            <ExpensesList date={monthDate} categoriesMap={categoriesMap} />
          }
        />
        <Route
          path="categories"
          element={
            <CategoriesList date={monthDate} categoriesMap={categoriesMap} />
          }
        />
      </Routes>
    </PageWrapper>
  );
};

export default StatisticsPage;
