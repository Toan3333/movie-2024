import React from "react";

const Dowload = () => {
  return (
    <div>
      <div className="container">
        <div className="bg-dry mt-8 py-10 px-20 flex items-center justify-between ">
          <div className="max-w-[530px] flex flex-col gap-6">
            <h1 className="text-3xl font-medium text-white leading-[50px]">
              Download Your Movies Watch Offline. Enjoy On Your Mobile
            </h1>
            <p className="text-text text-sm font-medium leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries..
            </p>
          </div>
          <div className="w-full">
            <img src="./mobile.png" className="w-full h-full object-cover" alt="Mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dowload;
