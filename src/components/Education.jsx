import { motion } from "motion/react";

function Education() {
  return (
    <section id="education" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
            My Background
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Education
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8">

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#050505] bg-white" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:bg-white/[0.05]">

              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Bachelor of Technology
                  </h3>

                  <p className="mt-2 text-white/50">
                    Artificial Intelligence & Machine Learning
                  </p>
                </div>

                <span className="text-sm text-white/40">
                  2023 – 2027
                </span>
              </div>

              <p className="mt-6 leading-7 text-white/50">
                Focused on Artificial Intelligence, Machine Learning,
                Data Structures & Algorithms, Database Systems,
                Computer Science fundamentals, and software development.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;