"use client"
import CalendarView from "@/components/CalendarView";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <Sidebar title={'Calendar'}>
          <div className="" >
              <CalendarView/>
          </div>  
      </Sidebar>
    </main>
  );
}
