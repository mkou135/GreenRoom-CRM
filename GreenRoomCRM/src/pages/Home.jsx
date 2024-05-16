import { Card } from "@material-tailwind/react";
import DbChart from "../components/home/DbChart";
import { TodoList } from "../components/home/Todo";
export default function Home() {
  return (
    <div className="mt-5 flex justify-around">
      <Card>
        <TodoList />
      </Card>
      <Card>
        <DbChart />
      </Card>
    </div>
  );
}
