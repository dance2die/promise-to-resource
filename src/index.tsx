export default function wrapPromise<T>(promise: Promise<T>) {
  let status: "pending" | "error" | "success";
  let result: T | Error;

  let suspender = promise.then(
    (r: T) => {
      status = "success";
      result = r;
    },
    (e: Error) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    }
  };
}
