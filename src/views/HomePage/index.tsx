import PageWrapper from "components/layouts/PageWrapper";
import PageBreadcrumbs from "components/PageBreadcrumbs";
import HomeScreen from "./Screen";

const HomePage = () => {
  return (
    <PageWrapper title={"Information Idol"}>
      <PageBreadcrumbs title={"Home"} home={false} />
      <HomeScreen />
    </PageWrapper>
  );
};

export default HomePage;
