import { useEffect, useRef, useState } from "react"
import "./App.css"
import {
  logo,
  foreground,
  bannerText,
  logo1,
  history,
  climb,
  hs1,
  hs2,
  hs3,
  hs4,
} from "./assets"
import {
  AnimatePresence,
  useScroll,
  useTransform,
  motion,
  wrap,
} from "framer-motion"
import { locations } from "../data"

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const containerRef = useRef(null)

  const slideLeft = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft -= 450
  }
  const slideRight = () => {
    const slider = document.getElementById("slider")
    slider.scrollLeft += 450
  }

  const [selectedTab, setSelectedTab] = useState(locations[0])

  return (
    <>
      <div className="w-full overflow-hidden h-auto">
        <nav className="fixed flex items-center justify-around w-full z-20 py-4">
          <div className="max-sm:hidden">
            <a href="/">
              <img src={logo} className="cursor-pointer" />
            </a>
          </div>
          <div className="sm:hidden">
            <img src={logo1} />
          </div>
          <div className="flex gap-8 underline font-semibold sm:text-[24px]">
            <h1 className="cursor-pointer hover:scale-110 hover:transition-all hover:duration-300">
              <a href="#history">01.HISTORY</a>
            </h1>
            <h1 className="cursor-pointer hover:scale-110 hover:transition-all hover:duration-300">
              <a href="#team">02.TEAM</a>
            </h1>
          </div>
        </nav>
        <div className="w-full">
          <div
            className="w-full bg-background bg-no-repeat grid place-items-center"
            ref={ref}
          >
            <img
              src={foreground}
              alt="failed to load"
              className="w-full max-sm:pt-11 z-10 relative"
            />
            <motion.h1
              style={{ y: textY }}
              className="absolute text-gray-800 top-14 md:top-16 lg:top-32 xl:top-52 2xl:top-72 text-[42px] sm:text-[84px] z-0 font-semibold"
            >
              LOSANGELES
              <br />
              <p className="text-center text-blue-950">MOUNTAINS</p>
            </motion.h1>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------- */}
        <div>
          <section className="flex items-center justify-center gap-6 px-6 sm:py-10 py-6">
            <span
              onClick={slideLeft}
              className="cursor-pointer text-blue-600 text-[32px] hover:scale-125 hover:transition-all hover:duration-300"
            >
              ⬅
            </span>
            <div
              id="slider"
              className="flex gap-5 w-auto overflow-x-scroll overflow-y-hidden no-scrollbar scroll-smooth"
            >
              <img
                className="inline-block hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                src={hs1}
                style={{ width: "570px", height: "350px" }}
              />
              <img
                className="inline-block hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                src={hs2}
                style={{ width: "570px", height: "350px" }}
              />
              <img
                className="inline-block hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                src={hs3}
                style={{ width: "570px", height: "350px" }}
              />
              <img
                className="inline-block hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                src={hs4}
                style={{ width: "570px", height: "350px" }}
              />
              <img
                className="inline-block hover:scale-110 hover:transition-all hover:duration-500 cursor-pointer"
                src={hs1}
                style={{ width: "570px", height: "350px" }}
              />
            </div>
            <span
              onClick={slideRight}
              className="hover:scale-125 hover:transition-all hover:duration-300 cursor-pointer text-blue-600 text-[32px]"
            >
              ➡
            </span>
          </section>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        <div id="history" className="w-full">
          <div className="w-full bg-historyBackground h-screen bg-no-repeat bg-cover">
            <div className=" px-14 sm:px-52 py-10">
              <img src={history} className="max-sm:w-24 max-sm:h-12" />
              <h1
                className="sm:text-[18px] text-[12px] ml-16 sm:ml-28"
                style={{ textWrap: "balance" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptas totam magnam laborum hic fuga fugiat velit corporis
                suscipit, officia nisi repudiandae atque cumque itaque in
                recusandae molestias, nesciunt dicta?
              </h1>
            </div>
          </div>
        </div>
        <section className="w-full" id="team">
          <div className="flex items-center justify-center gap-10 px-14 sm:px-52 py-10">
            <img src={climb} className="max-sm:w-24 max-sm:h-12" />
            <h1
              className="sm:text-[18px] text-[12px]"
              style={{ textWrap: "balance" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptas totam magnam laborum hic fuga fugiat velit corporis
              suscipit, officia nisi repudiandae atque cumque itaque in
              recusandae molestias, nesciunt dicta?
            </h1>
          </div>
        </section>
        <div className="w-full">
          <aside className="w-full bg-[#cddeff] grid place-items-start pl-20">
            <ul className="flex cursor-pointer">
              {locations.map((loc) => (
                <li
                  key={loc.label}
                  className={`${
                    loc === selectedTab
                      ? "bg-[#53668e] shadow-lg shadow-gray-600 text-white font-bold no-underline"
                      : "underline"
                  } relative select-none cursor-pointer py-4 text-[24px] `}
                  onClick={() => setSelectedTab(loc)}
                >
                  {`${loc.label}`}
                  {loc === selectedTab ? (
                    <motion.div
                      className="
                    absolute left-0 right-0"
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </aside>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab && (
                  <div className="w-full h-[800px]">
                    <img
                      src={selectedTab.icon}
                      className="w-full h-[750px] absolute z-0"
                    />
                    <div className="z-10 relative bg-white bg-opacity-50 top-6 sm:top-40 sm:left-40 w-[500px] h-[250px] flex flex-col justify-center items-center gap-8">
                      <h1 className="text-[28px] text-blue-500 ">SCHEDULE</h1>
                      <div>
                        <div className="flex justify-center items-center sm:gap-20 gap-6 font-semibold text-[18px]">
                          <div>05 Jan 2021</div>
                          <div>lorem ipsum</div>
                        </div>
                        <div className="flex justify-center items-center sm:gap-20 gap-6 font-semibold text-[18px]">
                          <div>05 Jan 2021</div>
                          <div>lorem ipsum</div>
                        </div>
                        <div className="flex justify-center items-center sm:gap-20 gap-6 font-semibold text-[18px]">
                          <div>05 Jan 2021</div>
                          <div>lorem ipsum</div>
                        </div>
                        <div className="flex justify-center items-center sm:gap-20 gap-6 font-semibold text-[18px]">
                          <div>05 Jan 2021</div>
                          <div>lorem ipsum</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
