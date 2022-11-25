import PageWrapper from "components/layouts/PageWrapper";
import PageBreadcrumbs from "components/PageBreadcrumbs";
import TodoScreen from "./TodoScreen";

const Todo = () => {
  return (
    <PageWrapper title={"Todo Idol"}>
      <PageBreadcrumbs title={"Todo"} />
      <TodoScreen />
    </PageWrapper>
  );
};

export default Todo;
