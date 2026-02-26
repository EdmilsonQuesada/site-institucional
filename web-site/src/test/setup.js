import '@testing-library/jest-dom'

// eslint-disable-next-line no-undef
if (typeof global !== 'undefined' && !global.matchMedia) {
  // eslint-disable-next-line no-undef
  global.matchMedia = function() {
    return {
      addListener: function() {},
      removeListener: function() {},
    }
  }
}
