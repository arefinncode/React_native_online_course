// const sum = require('./sum');
const bestLaCroixFlavor= require('./sum');
const fetchNewFlavorIdea =require('./fetchNewFlavorIdea');

/*
test('adds 1 + 2 to equal 3', () => {
    expect(sum(-1.2, 2.2)).toBe("1.00");
});
*/



test('the best flavor is grapefruit', () => {
    expect(bestLaCroixFlavor()).toBe('grapefruit');
});



expect.extend({
    toBDvsiblBy(received, argument){
        const pass = received % argument == 0;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be divisible by ${argument}`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to be divisible by ${argument}`,
                pass: false,
            };
        }
    },
});

test('even and odd numbers', () => {
    expect(100).toBDvsiblBy(2);
    expect(101).not.toBDvsiblBy(2);
    expect(105).toBDvsiblBy(3);
});




test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    [1].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
});

/*

// Not understood well
function randocall(fn) {
    fn(Math.floor(Math.random() * 6 + 1));

    console.log("fn: "+fn);
    // console.log("X: "+ x);
    return fn;
}

test('randocall calls its callback with a number', () => {
    const mock = jest.fn();
    // console.log(mock);
    randocall(mock);
    expect(mock).toBeCalledWith(expect.any(Number));
});*/


/*
describe('arrayContaining', () => {
    const expected = ['Alice', 'Bob'];
    it('matches even if received contains additional elements', () => {
        expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
    });
    it('does not match if received does not contain expected elements', () => {
        expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
    });
});
*/

// function fetchNewFlavorIdea() {
//     return x=21;
// }
// let fetchNewFlavorIdea=5;


/*

not understood properly
test('there is a new flavor idea', () => {
    // expect(fetchNewFlavorIdea()).toBeDefined();
    expect(fetchNewFlavorIdea()).toBe(defined);
});*/
