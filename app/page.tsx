"use client"
import Sidebar from "@/components/Sidebar";
import TaskTable from "@/components/TaskTable";
import { addTask,Task } from "@/lib/slices/tasksSlice";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <Sidebar title={'Dashboard'} >
          <div className="" >
            <TaskTable/>
          </div>  
      </Sidebar>
    </main>
  );
}
