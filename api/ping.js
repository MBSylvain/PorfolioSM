module.exports = (req, res) => {
  res.status(200).json({ 
    message: 'pong',
    method: req.method,
    timestamp: new Date().toISOString()
  });
};
