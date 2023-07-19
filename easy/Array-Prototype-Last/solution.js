Array.prototype.last = function() {
  if (this.length) {
      return this.pop()
  }
  return -1 
};