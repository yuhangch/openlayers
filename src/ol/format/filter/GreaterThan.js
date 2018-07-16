/**
 * @module ol/format/filter/GreaterThan
 */
import {inherits} from '../../util.js';
import ComparisonBinary from '../filter/ComparisonBinary.js';

/**
 * @classdesc
 * Represents a `<PropertyIsGreaterThan>` comparison operator.
 *
 * @constructor
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!number} expression The value to compare.
 * @extends {module:ol/format/filter/ComparisonBinary}
 * @api
 */
class GreaterThan {

  constructor(propertyName, expression) {
    ComparisonBinary.call(this, 'PropertyIsGreaterThan', propertyName, expression);
  }

}

inherits(GreaterThan, ComparisonBinary);

export default GreaterThan;
