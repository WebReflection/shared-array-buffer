let { SharedArrayBuffer } = globalThis;

try {
  new SharedArrayBuffer(4);
} catch (_) {
  const options = { shared: true, initial: 0, maximum: 0 };
  SharedArrayBuffer = new WebAssembly.Memory(options).buffer.constructor;
}

export default SharedArrayBuffer;
