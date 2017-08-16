import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

/** @class Globals
  * @classdesc Global variables and configuration
  */
export default class Globals {
  constructor() {
    this.expect = chai.expect;
    chai.use(chaiAsPromised);
  }
}
