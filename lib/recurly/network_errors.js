/* istanbul ignore file */
'use strict'

let ApiError = require('./ApiError')

// There is a generated ServiceUnavailableError in api_errors.js
// To prevent breaking changes, this one is being left in place.
class ServiceUnavailableError extends ApiError { }

class TimeoutError extends ApiError { }

class UnexpectedResponseError extends ApiError { }

module.exports = {

  ServiceUnavailableError: ServiceUnavailableError,

  TimeoutError: TimeoutError,

  UnexpectedResponseError: UnexpectedResponseError
}
