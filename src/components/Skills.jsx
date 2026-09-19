import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Machine Learning",
    skills: [
      "Machine Learning",
      "NLP",
      "Scikit-learn",
      "Feature Engineering",
    ],
  },
  {
    title: "Generative AI",
    skills: [
      "LLMs",
      "RAG",
      "Embeddings",
      "Vector Search",
      "AI Agents",
    ],
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "JWT Authentication",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "REST APIs",
      "Linux",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24 lg:px-16"
    >
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
            My Toolkit
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Skills
          </h2>
        </motion.div>

        {/* Skill cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <h3 className="text-lg font-semibold">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/60 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;