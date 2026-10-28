// Notes are stored as ordered topic sections per subject. Each paper's notes file calls
// addNote(subject, title, html): same title = content appended to that topic, new title = new section.
window.PYQ_NOTES = {};
function addNote(subject, title, html) {
  var s = window.PYQ_NOTES[subject] || (window.PYQ_NOTES[subject] = { sections: [] });
  for (var i = 0; i < s.sections.length; i++) {
    if (s.sections[i].title === title) { s.sections[i].html += "\n" + html; return; }
  }
  s.sections.push({ title: title, html: html });
}

// Topic-wise "books": a subject's notes as units -> topics in learning order (foundations first).
// addBook(subject, [[unitId, unitTitle, [[topicId, topicTitle], ...]], ...]) defines the tree;
// addBookTopic(subject, topicId, html) fills one topic. Unfilled topics show as "being written".
window.PYQ_BOOKS = {};
function addBook(subject, units) {
  window.PYQ_BOOKS[subject] = {
    units: units.map(function (u) {
      return { id: u[0], title: u[1], topics: u[2].map(function (t) { return { id: t[0], title: t[1], html: null }; }) };
    })
  };
}
function addBookTopic(subject, topicId, html) {
  var b = window.PYQ_BOOKS[subject];
  if (!b) throw new Error("addBookTopic before addBook: " + subject);
  for (var i = 0; i < b.units.length; i++)
    for (var j = 0; j < b.units[i].topics.length; j++)
      if (b.units[i].topics[j].id === topicId) { b.units[i].topics[j].html = (b.units[i].topics[j].html || "") + html; return; }
  throw new Error("unknown book topic " + subject + "/" + topicId);
}
