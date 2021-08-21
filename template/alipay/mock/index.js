module.exports = (app) => {
  app.post('/test', (req, res) => {
    res.json({
      code: 200,
      data: 'test',
      msg: null,
    });
  })

  app.get('/', (req, res) => {
    res.json({
      test: 'hello'
    });
  })
};
