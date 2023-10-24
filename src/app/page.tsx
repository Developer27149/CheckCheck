import Image from "next/image";
import { useState } from "react";

async function getData() {
  return Promise.resolve({
    count: ~~(Math.random() * 300),
    users: Array.from({ length: 10 }, () => ({
      name: "张三",
      count: ~~(Math.random() * 10),
      url: "https://avatars.githubusercontent.com/u/23721611?s=96&v=4",
    })),
  });
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex justify-center items-center w-screen h-screen overflow-auto flex-col">
      <div className="mb-4">
        <span className="bg-gray-800 px-2 py-1 text-white mr-2 rounded-sm inline-block font-bold hover:rotate-[5deg] hover:scale-105 hover:-translate-y-1 transform transition-all">
          CheckCheck
        </span>
        为大家签到了
        <span className="px-1 text-blue-600">{data.count}</span>次!
      </div>
      <div>
        <div className="text-xl mt-12 font-bold pl-4">
          谁在使用我们的服务{" "}
          <span className="bg-gray-100 rounded-full text-center p-1 text-sm">
            {data.users.length}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 p-4 min-h-[300px]">
          {data.users.map((user, idx) => (
            <div
              className="rounded-full w-[64px] h-[64px] bg-gray-50 flex items-center justify-center"
              key={user.count + idx}
            >
              <Image
                src={user.url}
                width={60}
                height={60}
                alt="avatar"
                className="rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-200 text-sm p-2 px-4 rounded-full hover:text-gray-700 transition-all hover:bg-gray-50">
        Power By Love
      </div>
    </main>
  );
}
