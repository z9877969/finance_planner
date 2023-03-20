import { Container, Section } from "shared/components";
import { Chart, Info, Statistic } from "modules/dynamicsPage";

const DynamicsPage = () => {
  return (
    // <PageWrapper>
    <Section>
      <Container>
        <div
          style={{
            display: "flex",
            paddingTop: "66px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "461px" }}>
            <Chart />
            <Statistic />
          </div>
          <Info />
        </div>
      </Container>
    </Section>
    // </PageWrapper>
  );
};

export default DynamicsPage;
