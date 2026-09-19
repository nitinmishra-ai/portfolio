import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
            What I've Built
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Projects
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/50">
            A selection of AI, machine learning, and backend systems
            I've built while developing my engineering skills.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              {/* Project image */}
              {project.image ? (
                <div className="overflow-hidden border-b border-white/10">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-60 items-center justify-center border-b border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
                  <div className="text-center">
                    <div className="text-4xl text-white/10">
                      AI
                    </div>

                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/20">
                      In Development
                    </p>
                  </div>
                </div>
              )}

              <div className="p-7">

                {/* Top row */}
                <div className="flex items-center justify-between gap-4">

                  <span
                    className={`rounded-full border px-3 py-1 text-xs ${
                      project.status === "Completed"
                        ? "border-white/20 text-white/70"
                        : "border-white/10 text-white/50"
                    }`}
                  >
                    {project.status}
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="text-white/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />

                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-semibold">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-[96px] leading-7 text-white/50">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/5 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 transition hover:bg-white/[0.08]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    GitHub
                  </a>

                  {project.status === "Completed" &&
                    project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;