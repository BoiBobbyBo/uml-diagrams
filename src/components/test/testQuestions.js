export const state = [
  {
    question: "Stāvokļu diagramma ir",
    answerOptions: [
      { answer: "Strukturālā", isCorrect: false },
      { answer: "Uzvedības", isCorrect: true },
    ],
  },
  {
    question: "Ko attēlo stāvokļu diagramma?",
    answerOptions: [
      { answer: "Sistēmas datu plūsma", isCorrect: false },
      { answer: "Objektu mijiedarbība laika gaitā", isCorrect: false },
      {
        answer: "Sistēmas stāvokļu secība, kuros tā var atrasties",
        isCorrect: true,
      },
    ],
  },
  {
    question: "Kas izraisa stāvokļa pāreju stāvokļu diagrammā?",
    answerOptions: [
      { answer: "Jauns stāvoklis", isCorrect: false },
      { answer: "Konkrēts notikums vai stāvoklis", isCorrect: true },
      { answer: "Sistēmas arhitektūras izmaiņas", isCorrect: false },
      { answer: "Procesa pabeigšana", isCorrect: false },
    ],
  },
];

export const uml = [
  {
    question: "Kura no šiem ir uzvedības UML diagramma?",
    answerOptions: [
      { answer: "Klašu diagramma", isCorrect: false },
      { answer: "Aktivitāšu diagramma", isCorrect: true },
      { answer: "Komponenšu diagramma", isCorrect: false },
      { answer: "Izvietošanas diagramma", isCorrect: false },
    ],
  },
  {
    question: "Kura no šiem ir struktūras UML diagramma?",
    answerOptions: [
      { answer: "Izvietošanas diagramma", isCorrect: true },
      { answer: "Sekvenču diagramma", isCorrect: false },
      {
        answer: "Lietošanas gadījumu diagramma",
        isCorrect: false,
      },
      {
        answer: "Stāvokļu diagramma",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Kura no šiem UML diagrammām tiek izmantota, lai attēlotu sistēmas struktūru?",
    answerOptions: [
      { answer: "Sekvenču diagramma", isCorrect: false },
      { answer: "Stāvokļu diagramma", isCorrect: false },
      { answer: "Klašu diagramma", isCorrect: true },
      { answer: "Lietošanas gadījumu diagramma", isCorrect: false },
    ],
  },
];
