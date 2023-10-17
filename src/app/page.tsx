import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex gap-1 items-center max-w-width bg-[#000] text-white p-2 rounded-md">
          <span className="px-12">我们为以下站点签到</span>
          <div className="flex bg-white p-1 gap-1 rounded-sm">
            <Image src="/wuaipojie.svg" width={32} height={32} alt="52 pojie" />
            <Image src="/juejin.svg" width={32} height={32} alt="52 pojie" />
            <Image src="/net163.svg" width={32} height={32} alt="52 pojie" />
          </div>
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl  lg:static lg:w-auto lg:p-4 ">
          总共为大家签到成功了
          <code className="font-mono font-bold px-1 text-green-500">1332</code>
          次!
        </p>
      </div>
      <div className="relative">
        <div className="absolute -top-12">
          <span className="transform rotate-[2deg] pl-12 inline-block text-green-500">
            ✿✿ヽ(°▽°)ノ✿
          </span>{" "}
          <span className="transform rotate-[-2deg] pl-12 inline-block text-gray-500">
            欢迎大家
          </span>
        </div>
        <div className="flex flex-wrap gap-1 items-center bg-transparent p-2 rounded-md max-w-[50vw] overflow-y-auto max-h-[40vh]">
          <Image src="/wuaipojie.svg" width={32} height={32} alt="52 pojie" />
          {Array.from({ length: 52 }).map((_, index) => (
            <Image
              key={index}
              src="https://avatars.githubusercontent.com/u/136426260?v=4"
              width={32}
              height={32}
              alt="52 pojie"
              role="avatar"
              style={{
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex text-center lg:max-w-5xl lg:w-full lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Docs </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>开发指南</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Usage</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>使用指北</p>
        </a>
        <div className="flex h-48 w-full ml-auto justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
