import Main from '../src/main';
import * as chai from 'chai';
var expect = chai.expect;
import * as sinon from 'sinon';

describe('Hoge', () => {
    var main: Main;

    beforeEach(() => {
        main = new Main();
    });

    it('spy sample', () => {
        var hoge = new Main();
        var spy = sinon.spy(hoge, "add");
        hoge.add(1, 1);
        chai.assert(spy.calledOnce);
        expect(spy.callCount).to.deep.equal(1);
    });

    it('add in Hoge', () => {
        var hoge = new Main();
        expect(hoge.add(1, 1)).to.deep.equal(2);
    });
});

