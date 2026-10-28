// Subjects in display order: the ten heads of UPSC's ESE Preliminary Paper I syllabus
// (General Studies and Engineering Aptitude), as printed in the ESE notification.
// A question belongs to exactly one subject.
// "Current Issues" = questions that need news of that exam year to answer, whatever their topic.
window.PYQ_SUBJECTS = [
  { id: "ca", name: "Current Issues" },
  { id: "reasoning", name: "Logical Reasoning & Analytical Ability" },
  { id: "maths", name: "Engineering Mathematics & Numerical Analysis" },
  { id: "design", name: "Design, Drawing & Safety" },
  { id: "quality", name: "Standards & Quality Practices" },
  { id: "energy", name: "Energy & Environment" },
  { id: "pm", name: "Project Management" },
  { id: "materials", name: "Material Science & Engineering" },
  { id: "ict", name: "ICT in Engineering" },
  { id: "ethics", name: "Ethics & Values in Engineering" }
];

// Every paper on the site (Paper I has been part of ESE Prelims since 2017). `questions` is the official
// count; papers become clickable once their questions are added to window.PYQ_QUESTIONS.
window.PYQ_PAPERS = (function () {
  var list = [];
  for (var y = 2026; y >= 2017; y--) list.push({ year: y, questions: 100 });
  return list;
})();

window.PYQ_QUESTIONS = window.PYQ_QUESTIONS || [];
