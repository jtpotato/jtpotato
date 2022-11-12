/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <>
      <div className="bg-black">
        <div className={"flex items-center justify-center h-screen"}>
          <div>
            <p className={"text-5xl text-white"}>
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Joel
              </span>
            </p>
            <p className="text-2xl text-slate-500">Site still a WIP</p>
          </div>
        </div>

        <div className="flex items-center justify-center h-screen">
          <div className="grid gap-4">
            <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              GitHub Stats
            </p>
            <img
              src="https://github-readme-stats.vercel.app/api?username=jtpotato&show_icons=true&theme=dark&count_private=true"
              alt="Github Stats"
            ></img>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=jtpotato&show_icons=true&theme=dark&layout=compact"
              alt="Most Used Languages"
            ></img>
          </div>
        </div>

        <div className="flex items-center justify-center h-screen">
          <div className="grid gap-4">
            <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              More
            </p>
            <div>
              <Link
                href={
                  "https://open.spotify.com/user/p2u0lsb3vojptkp3g4vy5gp9p?si=dd6eb571693b4d08"
                }
              >
                <p className="text-white underline">Spotify</p>
              </Link>
              <Link href="https://www.16personalities.com/profiles/a6937617c0cbe">
                <p className="text-white underline">16personalities</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
