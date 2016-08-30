/* eslint-disable no-console */

/**
 * Show a deprecated warning for Stardust components.
 * @param {String} name Name of the component being deprecated.
 * @param {String} warning Message to display to the user.
 * @param {String} Replacement Component to be returned in its place.
 * @returns {DeprecatedComponent}
 */
export const deprecateComponent = (name, warning, Replacement) => {
  return class DeprecatedComponent extends Replacement {
    constructor(...args) {
      super(...args)
      console.warn(warning
        ? `Stardust component "${name}" is deprecated. ${warning}`
        : `"${name}" will be removed in future versions. ${warning}`
      )
    }
  }
}
