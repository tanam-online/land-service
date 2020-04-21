require('dotenv').config()

var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var landsRouter = require('./routes/lands')
var harvestsRouter = require('./routes/harvests')
var activitiesRouter = require('./routes/activities')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/lands', landsRouter)
app.use('/harvests', harvestsRouter)
app.use('/activities', activitiesRouter)

/*
 * Check if API is live.
 */
app.get('/', (req, res) => {
  res.send('You are connected')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // send the error page
  res.status(err.status || 500)
  res.send('Endpoint not found')
})

module.exports = app
