import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">

          {/* Main introduction */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:bg-white/[0.05]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-white/70">
              I'm an AI/ML undergraduate focused on building practical
              intelligent applications and understanding how AI systems
              can be turned into real-world products.
            </p>

            <p className="mt-6 leading-8 text-white/50">
              My current focus is Machine Learning, Natural Language
              Processing, Large Language Models, Retrieval-Augmented
              Generation, and backend development with FastAPI.
            </p>

            <p className="mt-6 leading-8 text-white/50">
              I enjoy working across the complete development process —
              from building ML models and processing data to developing
              APIs, integrating databases, authentication, and AI-powered
              features.
            </p>

            <p className="mt-6 leading-8 text-white/50">
              I'm currently building an AI Customer Support Agent where
              I'm working with LLMs, RAG, embeddings, vector search,
              conversation history, and production-oriented backend
              architecture.
            </p>
          </motion.div>

          {/* Quick information */}
          <div className="space-y-4">

            {[
              {
                label: "Focus",
                value: "AI / Machine Learning",
              },
              {
                label: "Currently Building",
                value: "AI Customer Support Agent",
              },
              {
                label: "Interested In",
                value: "LLMs • RAG • AI Agents",
              },
              {
                label: "Based In",
                value: "New Delhi, India",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <p className="text-xs uppercase tracking-widest text-white/40">
                  {item.label}
                </p>

                <p className="mt-2 text-lg">
                  {item.value}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;