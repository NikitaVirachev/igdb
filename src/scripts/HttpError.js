class HttpError extends Error {
  status = null;
  statusCode = null;

  constructor(message, status, statusCode) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.statusCode = statusCode;
  }
}

export default HttpError;
