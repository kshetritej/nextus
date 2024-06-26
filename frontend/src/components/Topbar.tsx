import { Inbox, Plus } from "lucide-react";
import MyTodoDialog from "./MyTodoDialog";
const Topbar = () => {
  return (
    <div className="flex border-b-2 mb-4 justify-between p-2 ">
      <div>
        <h1 className="text-2xl flex gap-2 font-bold align-items-center justify-center"> <span className="py-1"><Inbox/> </span>Todo </h1>
      </div>
      <div>
        <MyTodoDialog mode={"Add"} trigger={<Plus/>} buttonVariant={"default"}/>
      </div>
    </div>
  );
};

export default Topbar;
