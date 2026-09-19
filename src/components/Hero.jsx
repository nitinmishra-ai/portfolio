import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">

        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Small introduction */}
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="h-px w-10 bg-white/40" />

            <p className="text-sm uppercase tracking-[0.4em] text-white/40">
              AI / ML Engineer
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Nitin
            <br />

            <span className="text-white/30">
              Mishra.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I build intelligent applications using Machine Learning,
            Large Language Models, RAG systems, and modern backend
            technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-white/90"
            >
              Explore My Work
            </a>

            <a
              href="/Nitin_Mishra_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/70 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/70 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Current focus */}
          <motion.div
            className="mt-16 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />

              <span className="relative inline-flex h-3 w-3 rounded-full bg-white/70" />
            </span>

            <p className="text-sm text-white/40">
              Currently building an AI Customer Support Agent
            </p>
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition hover:text-white/70 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <ArrowDown
            size={18}
            className="animate-bounce"
          />
        </motion.a>

      </div>
    </section>
  );
}

export default Hero;