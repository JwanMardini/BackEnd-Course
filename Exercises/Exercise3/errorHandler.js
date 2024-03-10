import http from 'http'

export const handler = {}

/**
 * Default error handler  for 404 routes when the resource is not found.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 * @param {object} next - Express next function.
 */
handler.notFoundDefault = (req, res, next) => {
  const err = new Error(http.STATUS_CODES[404])
  err.status = 404
  throw err

}

/**
 * Default error handler  for 404 routes when the resource is not found.
 *
 * @param {object} req Express request object.
 * @param {object} res Express response object.
 */
handler.errorDefault = (err, req, res, next) => {
  console.error(err)

  if (process.env.NODE_ENV === 'production') {
    res.status(500).send('500')
  } else if (err.status) {
    res.status(err.status).json({
      status: err.status,
      message: err.message
    })
  }
}
