'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let curentState = { ...state };
  const result = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      curentState = { ...curentState, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      curentState = { ...curentState };

      for (const key of action.keysToRemove) {
        delete curentState[key];
      }
    }

    if (action.type === 'clear') {
      curentState = {};
    }

    result.push({ ...curentState });
  }

  return result;
}
module.exports = transformStateWithClones;
