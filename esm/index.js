export default /** @type {SharedArrayBuffer} */ (
  globalThis.SharedArrayBuffer ||
  new WebAssembly.Memory(
    {shared: true, initial: 0, maximum: 0}
  ).buffer.constructor
);
