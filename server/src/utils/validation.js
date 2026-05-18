function validateNoteTitle(title) {
  // Stub returning true so the tests checking for rejection (false) will fail
  return true;
}

function validateNoteContent(content) {
  // Stub returning true so the tests checking for rejection (false) will fail
  return true;
}

function generateNoteId() {
  // Stub returning a static value so the test checking for uniqueness will fail
  return "stub-id";
}

module.exports = {
  validateNoteTitle,
  validateNoteContent,
  generateNoteId
};
