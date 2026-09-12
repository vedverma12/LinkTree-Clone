import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="  bg-[#254f1A] min-h-[100vh] grid grid-cols-2">
        <div className=" flex justify-center flex-col ml-[10vw] gap-1">
          <p className="text-yellow-300 font-bold text-5xl">Everything you</p>
          <p className="text-yellow-300 font-bold text-5xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-5xl">simple link in bio.</p>
          <p className="pb-1 text-yellow-300 text-xl my-3">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="  input flex gap-2">
            <input className="px-2 py-2 focus:outline-green-800 bg-white rounded-md" type="text" placeholder="bittr.ee/your-url"/>
            <button className="bg-pink-300 rounded-full px-4 py-4 font-semibold">Claim your BitTree</button>
          </div>
        </div>
        <div className=" flex justify-center items-center flex-col mr-[10vw]">
          <img className="h-120" src="/home.png" alt="" />
        </div>
      </section>
      <section className="bg-red-700 min-h-[100vh]">

      </section>
    </main>
  );
}
