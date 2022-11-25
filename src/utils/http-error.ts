type ErrorCode = "ERROR1" | "ERROR2";

interface Error {
  message: ErrorCode;
}

const errors: Record<ErrorCode, string> = {
  ERROR1: "errors.1",
  ERROR2: "errors.2",
};

class httpError {
  public serialize(error: unknown, fallback?: string) {
    const { message } = (error || {}) as Error;
    return message && message in errors
      ? errors[message]
      : fallback || "Errors cmm!";
  }
}

export default new httpError();
