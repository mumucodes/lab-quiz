import { isYes } from '../utlis.js';
const test = QUnit.test;

test('my first test on quiz lab', (expect) => { 
const expected = true;
    const actual = isYes('yes');
    expect.equal(actual, expected, 'yes is true');
    expect.equal(isYes('YES'), true, 'YES is true');
    expect.equal(isYes('No'), false, 'No is true');
})
