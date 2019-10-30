export default function wrapPromise<T>(promise: Promise<T>) {
  let status: string = "pending";
  let result: T | Error;

  let suspender = promise.then(
    (r: T) => {
      status = "Success";
      result = r;
    },
    (e: Error) => {
      status = "Error!";
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
