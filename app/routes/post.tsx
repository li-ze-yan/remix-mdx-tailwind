import { Outlet } from "@remix-run/react";

const Index = () => {
  return (
    <div className="flex justify-center">
      <div className="prose prose-slate lg:prose-md py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
