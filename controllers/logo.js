const handleLogo = (req, res, db) => {
  const { date } = req.params;
  db.select('joined').from('users').where({date})
    .then(range => {
      if (range.length) {
        res.json(range[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
  handleLogo
}