export type Training = {
  name: string;
  description: string;
  materials?: string;
  setup?: string;
};

export const trainings: Training[] = [
  {
    name: "Linux-Administration",
    description: "Von der Einführung bis zur Administration.",
    materials: "https://linux.lean-stack.rocks/",
  },
  {
    name: "JavaScript & TypeScript",
    description: "Von den Grundlagen bis zu fortgeschrittenen Themen — all-in.",
    setup: "/training/setup/javascript",
  },
  {
    name: "Node.js",
    description: "Serverseitiges JavaScript und TypeScript.",
    setup: "/training/setup/javascript",
  },
  {
    name: "React",
    description: "Moderne UI-Entwicklung mit Komponenten.",
    materials: "https://react.lean-stack.rocks/",
    setup: "/training/setup/javascript",
  },
  {
    name: "Vue",
    description: "Vue 3 — Grundlagen bis Fortgeschritten.",
    materials: "https://vue.lean-stack.rocks/",
    setup: "/training/setup/javascript",
  },
  {
    name: "Angular",
    description: "Seit 2016 einer meiner Schulungsschwerpunkte.",
    setup: "/training/setup/javascript",
  },
  {
    name: "HTML & CSS",
    description: "Das Fundament jeder Web-Anwendung.",
    materials: "https://html.lean-stack.rocks/",
  },
  {
    name: "Java Grundlagen",
    description: "Einstieg und Aufbau in zwei Wochen.",
    materials: "https://java.lean-stack.rocks/",
  },
  {
    name: "PHP",
    description: "Serverseitige Web-Entwicklung mit PHP.",
  },
];

export const legacyTopics = ["C/C++", "Java EE (Jakarta EE)", "C# (.NET)", "Perl"];

export const clients = [
  "Siemens",
  "Miele",
  "Lufthansa",
  "Airbus",
  "Bayer",
  "HypoVereinsbank",
  "Commerzbank",
  "Fraport",
  "Goodyear Dunlop",
  "Fraunhofer",
  "Deutsche Post",
];
