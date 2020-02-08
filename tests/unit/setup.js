let chai = require('chai');
global.expect = chai.expect;

const bind = (wrapper, selector, text, event = 'input') => {
    if (wrapper) {
        wrapper.find(selector).element.value = text;
        wrapper.find(selector).trigger(event);
    }
};

global.bind = bind;


const exists = (wrapper, selector) => {
    expect(wrapper.find(selector).exists()).to.be.true;
};

global.exists = exists;


const assertElementValue = (wrapper, selector, value) => {
    if (wrapper) {
        expect(wrapper.find(selector).element.value).to.equal(value);
    }
};

global.assertElementValue = assertElementValue;
