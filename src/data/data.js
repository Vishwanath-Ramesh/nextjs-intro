const notes = new Array(25).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `Note ${i}`,
}));

module.exports = notes;
