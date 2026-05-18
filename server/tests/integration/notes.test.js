const request = require('supertest');
const app = require('../../src/app');

describe('Notes Integration Tests (CRUD API)', () => {
  let createdNoteId;

  it('GET /notes should return an empty list initially', async () => {
    const res = await request(app).get('/notes');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /notes should create a new note', async () => {
    const newNote = {
      title: 'Study Guide',
      content: 'Important study guide details for the upcoming TDD exam.'
    };
    const res = await request(app).post('/notes').send(newNote);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe(newNote.title);
    expect(res.body.content).toBe(newNote.content);
    createdNoteId = res.body.id;
  });

  it('POST /notes should reject invalid note details with 400', async () => {
    const invalidNote = { title: '', content: '' };
    const res = await request(app).post('/notes').send(invalidNote);
    expect(res.statusCode).toBe(400);
  });

  it('PUT /notes/:id should update an existing note', async () => {
    const updatedNote = {
      title: 'Updated Study Guide',
      content: 'Updated content with even more useful details.'
    };
    const res = await request(app)
      .put(`/notes/${createdNoteId}`)
      .send(updatedNote);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(updatedNote.title);
    expect(res.body.content).toBe(updatedNote.content);
  });

  it('PUT /notes/:id should return 404 for non-existent note ID', async () => {
    const updatedNote = { title: 'Ghost Note', content: 'Ghost content' };
    const res = await request(app)
      .put('/notes/non-existent-id')
      .send(updatedNote);
    expect(res.statusCode).toBe(404);
  });

  it('DELETE /notes/:id should delete the note and return 200', async () => {
    const res = await request(app).delete(`/notes/${createdNoteId}`);
    expect(res.statusCode).toBe(200);
  });
});
