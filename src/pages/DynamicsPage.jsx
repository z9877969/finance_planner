import { PageWrapper } from "../shared/components";
import { Chart, Info, Statistic } from "../modules/dynamicsPage";

const DynamicsPage = () => {
  return (
    <PageWrapper>
      <Chart />
      <Statistic />
      <Info />
    </PageWrapper>
  );
};

export default DynamicsPage;
