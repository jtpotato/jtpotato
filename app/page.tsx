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
            <p className="text-xl text-slate-500">
              Degree in Searching Stackoverflow and Having No Original Ideas.
              <br />
              Defender of Bubble Tea Plushies.
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center gap-10">
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
          <div className="grid gap-4">
            <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Projects
            </p>
            <p className="text-white">
              I have some strange affinity for random projects...
            </p>

            <div>
              <p className="text-white underline">Megaphone</p>
              <p className="text-white">
                ca. Late Oct 2022
                <br />
                Coming soon...
              </p>
            </div>

            <div>
              <p className="text-white underline">Moshi</p>
              <p className="text-white">
                ca. Oct 2022
                <br />
                Coming soon...
              </p>
            </div>
            <div>
              <Link href="https://github.com/jtpotato/genshin-music-generator">
                <p className="text-blue-500 underline">
                  Genshin Music Generator
                </p>
              </Link>
              <p className="text-white">
                27/9/2022
                <br />
                Uses Google's Magenta to attempt to randomly generate piano
                scores in the same style as Genshin Impact Character Demo OSTs.
              </p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8v47m-5Ekj4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <Link href="https://github.com/jtpotato/random-things/tree/main/anti-swear">
                <p className="text-blue-500 underline">Anti-swear</p>
              </Link>
              <p className="text-white">
                ca. Dec 2021
                <br />
                AI based off of the profanity-check python package, to detect
                profanity/offensive language.
              </p>
            </div>
            <div>
              <Link href="https://github.com/jtpotato/robocup-2021">
                <p className="text-blue-500 underline">RoboCup 2021</p>
              </Link>
              <p className="text-white">
                ca. Nov 2021
                <br />
                Source repository for RobotC programs used in Robocup 2021. I
                have *no idea* what I'm doing.
              </p>
            </div>
            <div>
              <Link href="https://replit.com/@JTpotato/YTExperiments">
                <p className="text-blue-500 underline">YouTube Experiments</p>
              </Link>
              <p className="text-white">
                ca. 2020
                <br />
                Finds a word from the transcript of youtube videos from a
                specific channel. Could be useful for "YouTuber Sings" type
                content.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              More
            </p>
            <div>
              <Link href="https://open.spotify.com/user/p2u0lsb3vojptkp3g4vy5gp9p?si=dd6eb571693b4d08">
                <p className="text-white underline">Spotify</p>
              </Link>
              <Link href="https://www.16personalities.com/profiles/a6937617c0cbe">
                <p className="text-white underline">16personalities</p>
              </Link>
            </div>
          </div>
        </div>

        <div className={"flex items-center justify-center h-screen"}>
          <p className="text-2xl text-white">
            Oops, this site is still under construction. Check back later!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
