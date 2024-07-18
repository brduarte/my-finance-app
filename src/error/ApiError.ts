export class ApiError extends Error {
  constructor(error: Error) {
    super(error.message);
  }
}
