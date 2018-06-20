// https://jasmine.github.io/pages/docs_home.html
// https://jasmine.github.io/2.0/introduction.html
// Suite
describe('our first test suite', () => {
    let string;

    beforeEach(() => {
        string = 'Hello Jasmine!';
    });

    // Specs
    it('true is true', () => {
        expect(true).toBe(true);
    });

    it('true is not false', () => {
        expect(true).not.toBe(false);
    });

    it('1 is greater than 0', () => {
        expect(1).toBeGreaterThan(0);
    });

    it('Hello jasmine!', () => {
        expect(string).toBe(string);
    });
});
