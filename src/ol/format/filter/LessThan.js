/**
 * @module ol/format/filter/LessThan
 */
import {inherits} from '../../util.js';
import ComparisonBinary from '../filter/ComparisonBinary.js';

/**
 * @classdesc
 * Represents a `<PropertyIsLessThan>` comparison operator.
 *
 * @constructor
 * @param {!string} propertyName Name of the context property to compare.
 * @param {!number} expression The value to compare.
 * @extends {module:ol/format/filter/ComparisonBinary}
 * @api
 */
class LessThan {

  constructor(propertyName, expression) {
    ComparisonBinary.call(this, 'PropertyIsLessThan', propertyName, expression);
  }

}

inherits(LessThan, ComparisonBinary);

export default LessThan;
