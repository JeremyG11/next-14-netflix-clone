export const useDebounce = (fn: Function, t: number) => {
  let timerId: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};
