import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

export default class Globals {
  constructor() {
    this.expect = chai.expect;
    chai.use(chaiAsPromised);
  }
}
