class GlobalError extends Error {
  constructor(status, message, statusCode) {
    super();
    this.status = status || "error";
    this.statusCode = statusCode || 500;
    this.message = message || "internal server error";
  }
}
module.exports = GlobalError;
