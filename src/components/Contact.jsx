import { Mail } from "lucide-react";
import { motion } from "motion/react";

function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">

        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center sm:px-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >

          <motion.p
            className="text-sm uppercase tracking-[0.4em] text-white/40"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Connect
          </motion.p>

          <motion.h2
            className="mt-5 text-4xl font-bold sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's build something together.
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-xl leading-7 text-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm interested in AI/ML engineering, intelligent applications,
            and opportunities where I can learn, build, and contribute.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

            {/* Email */}
            <a
              href="mailto:nm1823927@gmail.com"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              <Mail size={17} />
              Email Me
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nitinmishra-ai"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nitin-mishra14/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              LinkedIn
            </a>

          </motion.div>

        </motion.div>

        <footer className="py-10 text-center text-sm text-white/30">
          © 2026 Nitin Mishra. Built with React.
        </footer>

      </div>
    </section>
  );
}

export default Contact;