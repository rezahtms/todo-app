import Todo from "@/components/pages/todo/Todo";

const TodoPage = ({ params }: { params: { companyName: string } }) => {
  return <Todo params={params.companyName} />;
};

export default TodoPage;
