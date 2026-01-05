"use client";
import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import TailwindCSS from "../icons/tailwind-css";
import { BrowseComponentsButton } from "../ui/browse-button";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import Features from "./features";
import Link from "next/link";
import Card_02 from "../codesnippetui/card/card-02";
import Profile01 from "../codesnippetui/profile/profile-01";
import Card_03 from "../codesnippetui/card/card-03";
import AIInput_01 from "../codesnippetui/ai-input/ai-input-01";
import AIInput_02 from "../codesnippetui/ai-input/ai-input-02";
import AIInput_03 from "../codesnippetui/ai-input/ai-input-03";
import AIInput_04 from "../codesnippetui/ai-input/ai-input-04";
import Btn02 from "../codesnippetui/buttons/btn-02";
import Btn03 from "../codesnippetui/buttons/btn-03";
import Btn10 from "../codesnippetui/buttons/btn-10";
import Btn09 from "../codesnippetui/buttons/btn-09";
import Btn06 from "../codesnippetui/buttons/btn-06";
import Btn07 from "../codesnippetui/buttons/btn-07";
import Input_02 from "../codesnippetui/input/input-02";
import Input_03 from "../codesnippetui/input/input-03";
import Input_04 from "../codesnippetui/input/input-04";
import Input_08 from "../codesnippetui/input/input-08";
import Input_09 from "../codesnippetui/input/input-09";
import Input11 from "../codesnippetui/input/input-11";
import Card_LiquidProgress from "../codesnippetui/cardliquid";

const HeroSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 mg:py-16 lg:py-20 ">
      {/*LEFT SIDE -TITLE & CTA */}
      <div className="w-full lg:w-[45%] flex-col items-start text-left space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
            Craft with{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              precision
            </span>
            <br />
            build with{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">
              ease.
            </span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
            A curated collection of{" "}
            <span className="font-semibold">100+ premium UI components</span>{" "}
            <span>crafted with </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-500 to-purple-500 dark:from-fuchsia-400 dark:to-purple-400">
              shadcn/ui
            </span>{" "}
            for modern React and Next.js applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-300 pb-3 text-start flex items-center gap-2">
            <TailwindCSS className="w-4 h-4" />
            <span className="flex items-center gap-1.5">
              Now updated for Tailwind CSS 4.0!
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                <Sparkles className="h-3 w-3 mr-1" />
                New
              </span>
            </span>
          </span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>
        <Features />
      </div>
      {/*RIGHT SIDE-COMPONENTS LAYOUT  */}
      <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8 ">
        {/*Top Row-Action search bar */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
        >
          {/*Card components */}
          <div className="w-full flex flex-col items-center justify-center">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Card
            </span>

            <Card_03 />
          </div>

          <div className="w-full max-w-150 bg-transparent">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Components
            </span>
            {/*<ActionSearchBar /> */}
            <Profile01 />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full "
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
            AI Chat
          </span>
          <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex justify-center items-center">
            {/**<AInput /> */}
            <AIInput_04 />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 "
        >
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Buttons
            </span>
             <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-3 justify-center items-center">
            {/**<AInput /> */}
            <Link href={"/docs/components/button"}>{/* <Buttons />*/} <Btn02 />
            </Link>
            <Link href={"/docs/components/button"}> {/* <Buttons />*/}<Btn07 /></Link>
          </div>
          </div>

         

          <div className="w-full ">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Buttons
            </span>
            <Link href={"/docs/components/input"}>{/*inputs*/}<Card_LiquidProgress /></Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
