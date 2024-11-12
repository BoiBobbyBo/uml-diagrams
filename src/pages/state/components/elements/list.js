export const elements = [
  {
    title: "Sākums",
    image: "/src/assets/images/state/elements/start.svg",
    desc: "Objekta sākuma stāvoklis",
  },
  {
    title: "Beigas",
    image: "/src/assets/images/state/elements/end.svg",
    desc: "Objekta stāvokļa vai dzīves cikla pabeigšana",
  },
  {
    title: "Pārejas",
    image: "/src/assets/images/state/elements/arrow.svg",
    desc: "Savieno stāvokļus, kas norāda kustību vai pāreju no viena stāvokļa uz citu. Apzīmēti ar notikumiem vai nosacījumiem, kas izraisa izmaiņas",
  },
  {
    title: "Stāvoklis",
    image: "/src/assets/images/state/elements/state.svg",
    desc: "Apzīmē dažādus apstākļus vai situācijas, kādos objekts var atrasties",
  },
  {
    title: "Stāvoklis ar aktivitātēm",
    image: "/src/assets/images/state/elements/activities.svg",
    desc: "Stāvoklis var ietvert arī darbības, kas notiek, kad objekts atrodas šajā stāvoklī,<br>(entry / ieejot stāvoklī; do / notiek, kamēr esot stāvoklī; exit / izejot no stāvokļa ).<br>Šīs darbības tiek veiktas, līdz tiek aktivizēta pāreja uz nākamo stāvokli.",
  },
  {
    title: "Sazarojums",
    image: "/src/assets/images/state/elements/guard.svg",
    desc: "Nosacījums, kas nosaka, vai notiks pāreja starp stāvokļiem atkarībā no tā, vai nosacījuma vērtība ir true vai false",
  },
  {
    title: "Apvienojums (Join)",
    image: "/src/assets/images/state/elements/join.svg",
    desc: "Apvieno vairākas paralēlas plūsmas vienā",
  },
  {
    title: "Zarojums (Fork)",
    image: "/src/assets/images/state/elements/fork.svg",
    desc: "Sadala vienu plūsmu vairākās paralēlās plūsmās",
  },
  {
    title: "Salikts stāvoklis",
    image: "/src/assets/images/state/elements/nested.svg",
    desc: "Stāvoklis, kas ietver citus stāvokļus hierarhijā, lai attēlotu sarežģītāku uzvedību un struktūru",
  },
];
