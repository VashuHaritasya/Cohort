import { json } from "stream/consumers";
import revalidate from "../lib/actions/action1";

export default async function Home() {
  const res = await fetch("https://sum-server.100xdevs.com/todos", {
    next: { tags: ["todos"] },
  });
  const data = await res.json();
  revalidate();

  console.log("todos");
  return (
    <div>
      {data.todos.map((todo: any) => (
        <div key={todo.id}>
          {todo.title}
          {todo.description}
        </div>
      ))}
    </div>
  );
}
