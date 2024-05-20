import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="about">
        <div class="h-screen w-full dark:bg-gray-800">
          <section class="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
            <h2 class="mb-6 text-2xl text-center font-bold text-gray-100 md:text-3xl dark:text-white">
              ABOUT US
            </h2>
            <div class="mb-16 text-center">
              
              <p class="mt-2 sm:text-lg lg:text-xl font-bold tracking-tight text-white">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
              <div class="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-white dark:bg-gray-700 dark:border-gray-400/40">
                <a
                  class="text-xl font-semibold text-blue-700 hover:underline two-lines dark:text-blue-100"
                  href=""
                >
                  Football Legends Gerrard and Carragher Fall Prey to Fictitious
                  Rap Song
                </a>

                <div class="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                    Entertainment
                  </span>
                  <span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                    Sports
                  </span>
                  <span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                    Crime
                  </span>
                </div>

                <p class="text-gray-800 two-lines dark:text-gray-300">
                  A disconcerting rap song about murder featuring fake voices of
                  renowned footballers Steven Gerrard and Jamie Carragher,
                  created by prisoner L20 Mazza, has become a sensation online.
                </p>

                <div class="flex items-center justify-between text-sm">
                  <button class="text-gray-500 dark:text-gray-300">
                    2 min read
                  </button>

                  <a
                    href=""
                    class="text-blue-700 hover:underline dark:text-white"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div class="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-white dark:bg-gray-700 dark:border-gray-400/40">
                <a
                  class="text-xl font-semibold text-blue-700 hover:underline two-lines dark:text-blue-100"
                  href=""
                >
                  How The Late Queen Elizabeth II Understood Meghan Markle's
                  Influence
                </a>

                <div class="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                    Entertainment
                  </span>
                  <span class="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                    Lifestyle
                  </span>
                </div>

                <p class="text-gray-800 two-lines dark:text-gray-300">
                  The late Queen Elizabeth II saw potential in Meghan Markle's
                  presence in the Royal Family. She even offered Meghan the
                  opportunity to continue her acting career while serving as a
                  royal. Nevertheless, Meghan chose to dedicate herself to her
                  royal duties.
                </p>

                <div class="flex items-center justify-between text-sm">
                  <button class="text-gray-500 dark:text-gray-300">
                    2 min read
                  </button>

                  <a
                    href=""
                    class="text-blue-700 hover:underline dark:text-white"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
