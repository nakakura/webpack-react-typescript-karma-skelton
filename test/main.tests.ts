import Hoge from '../src/main';
import * as chai from 'chai';
var expect = chai.expect;
declare var sinon;

describe('Hoge', () => {
    beforeEach(() => {
    });

    it('spy sample', () => {
        var hoge = new Hoge();
        var spy = sinon.spy(hoge, "add");
        hoge.add(1, 1);
        chai.assert(spy.calledOnce);
        expect(spy.callCount).to.deep.equal(1);
    });

    it('add in Hoge', () => {
        var hoge = new Hoge();
        expect(hoge.add(1, 1)).to.deep.equal(2);
    });
});

