const express = require('express');
const router = express.Router();

app.use('/', indexRouter);
app.use('/music', musicRouter);
app.use('/user', userRouter);

module.exports = router;
