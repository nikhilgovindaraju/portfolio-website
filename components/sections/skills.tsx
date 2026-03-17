"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

interface SkillItem { name: string; devicon: string; }

const skillCategories = [
  {
    id: "languages", label: "Languages",
    skills: [
      { name: "TypeScript",  devicon: "typescript/typescript-original.svg" },
      { name: "Python",      devicon: "python/python-original.svg" },
      { name: "JavaScript",  devicon: "javascript/javascript-original.svg" },
      { name: "Java",        devicon: "java/java-original.svg" },
      { name: "Swift",       devicon: "swift/swift-original.svg" },
      { name: "C++",         devicon: "cplusplus/cplusplus-original.svg" },
      { name: "Dart",        devicon: "dart/dart-original.svg" },
      { name: "C",           devicon: "c/c-original.svg" },
    ] as SkillItem[],
  },
  {
    id: "frontend", label: "Frontend",
    skills: [
      { name: "React",        devicon: "react/react-original.svg" },
      { name: "Next.js",      devicon: "nextjs/nextjs-original.svg" },
      { name: "Angular",      devicon: "angular/angular-original.svg" },
      { name: "Flutter",      devicon: "flutter/flutter-original.svg" },
      { name: "Tailwind CSS", devicon: "tailwindcss/tailwindcss-original.svg" },
      { name: "Redux",        devicon: "redux/redux-original.svg" },
      { name: "HTML5",        devicon: "html5/html5-original.svg" },
      { name: "CSS3",         devicon: "css3/css3-original.svg" },
    ] as SkillItem[],
  },
  {
    id: "backend", label: "Backend",
    skills: [
      { name: "Node.js",     devicon: "nodejs/nodejs-original.svg" },
      { name: "Express",     devicon: "express/express-original.svg" },
      { name: "FastAPI",     devicon: "fastapi/fastapi-original.svg" },
      { name: "Flask",       devicon: "flask/flask-original.svg" },
      { name: "Spring Boot", devicon: "spring/spring-original.svg" },
      { name: "GraphQL",     devicon: "graphql/graphql-plain.svg" },
      { name: "REST APIs",   devicon: "fastapi/fastapi-original.svg" },
    ] as SkillItem[],
  },
  {
    id: "cloud", label: "Cloud & DevOps",
    skills: [
      { name: "AWS",            devicon: "amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "GCP",            devicon: "googlecloud/googlecloud-original.svg" },
      { name: "Docker",         devicon: "docker/docker-original.svg" },
      { name: "Kubernetes",     devicon: "kubernetes/kubernetes-original.svg" },
      { name: "GitHub Actions", devicon: "github/github-original.svg" },
      { name: "Kafka",          devicon: "apachekafka/apachekafka-original.svg" },
      { name: "Jenkins",        devicon: "jenkins/jenkins-original.svg" },
    ] as SkillItem[],
  },
  {
    id: "databases", label: "Databases",
    skills: [
      { name: "PostgreSQL", devicon: "postgresql/postgresql-original.svg" },
      { name: "MongoDB",    devicon: "mongodb/mongodb-original.svg" },
      { name: "Redis",      devicon: "redis/redis-original.svg" },
      { name: "MySQL",      devicon: "mysql/mysql-original.svg" },
      { name: "DynamoDB",   devicon: "dynamodb/dynamodb-original.svg" },
      { name: "Firebase",   devicon: "firebase/firebase-original.svg" },
      { name: "Supabase",   devicon: "supabase/supabase-original.svg" },
    ] as SkillItem[],
  },
  {
    id: "ai", label: "ML & AI",
    skills: [
      { name: "TensorFlow",   devicon: "tensorflow/tensorflow-original.svg" },
      { name: "PyTorch",      devicon: "pytorch/pytorch-original.svg" },
      { name: "Keras",        devicon: "keras/keras-original.svg" },
      { name: "OpenAI API",   devicon: "openai/openai-original.svg" },
      { name: "Pandas",       devicon: "pandas/pandas-original.svg" },
      { name: "NumPy",        devicon: "numpy/numpy-original.svg" },
      { name: "Scikit-Learn", devicon: "scikitlearn/scikitlearn-original.svg" },
      { name: "HuggingFace",  devicon: "python/python-original.svg" },
    ] as SkillItem[],
  },
];

function SkillIcon({ devicon, name }: { devicon: string; name: string }) {
  return (
    <div className="relative w-8 h-8 flex-shrink-0">
      <Image src={`${ICON_BASE}/${devicon}`} alt={name} fill className="object-contain" unoptimized />
    </div>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState("languages");
  const active = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-white/25" />
            <p className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">Skills</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Tech I <span className="text-white/30">work with.</span>
          </h2>
        </motion.div>

        {/* Two-column layout: sidebar tabs + icon grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* LEFT — vertical category list */}
          <motion.div
            className="flex flex-row lg:flex-col gap-2 flex-wrap lg:flex-nowrap lg:w-44 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skillCategories.map(({ id, label, skills }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`group relative flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 border ${
                    isActive
                      ? "border-blue-500/30 bg-blue-500/8 text-white"
                      : "border-white/[0.05] bg-transparent text-white/35 hover:text-white/65 hover:border-white/10 hover:bg-white/[0.03]"
                  }`}
                >
                  {/* Active blue left bar */}
                  {isActive && (
                    <motion.div
                      layoutId="category-bar"
                      className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-blue-400"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="text-sm font-medium relative z-10">{label}</span>
                  <span className={`text-[11px] font-mono ml-2 flex-shrink-0 ${isActive ? "text-blue-400/70" : "text-white/20"}`}>
                    {skills.length}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* RIGHT — icon grid */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category title */}
                <p className="text-white/25 text-xs uppercase tracking-widest font-semibold mb-5">
                  {active.label}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                  {active.skills.map(({ name, devicon }, i) => (
                    <motion.div
                      key={name}
                      className="group flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.14] transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.035, duration: 0.3 }}
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      <SkillIcon devicon={devicon} name={name} />
                      <p className="text-white/60 text-sm font-medium group-hover:text-white/90 transition-colors leading-tight truncate">
                        {name}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Stats bar */}
                <motion.div
                  className="mt-6 flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="h-px flex-1 bg-white/[0.05]" />
                  <p className="text-white/20 text-[11px] font-mono">
                    {active.skills.length} technologies
                  </p>
                  <div className="h-px flex-1 bg-white/[0.05]" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom: compact icon-only strip of ALL skills */}
        <motion.div
          className="mt-16 pt-10 border-t border-white/[0.05]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-white/20 text-[10px] uppercase tracking-widest text-center mb-6">
            Full Stack
          </p>
          {/* Icon-only row — all logos, no text */}
          <div className="flex flex-wrap gap-3 justify-center">
            {skillCategories.flatMap((c) =>
              c.skills.map(({ name, devicon }) => (
                <motion.div
                  key={name}
                  className="group relative w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center hover:border-white/[0.15] hover:bg-white/[0.06] transition-all"
                  title={name}
                  whileHover={{ scale: 1.18, y: -2 }}
                >
                  <div className="relative w-5 h-5">
                    <Image src={`${ICON_BASE}/${devicon}`} alt={name} fill className="object-contain" unoptimized />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#111] border border-white/10 rounded-lg text-[10px] text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {name}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export { Skills };
export default Skills;