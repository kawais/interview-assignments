import { storeInstance } from '../src/store';

describe('IStore defined', () => {
    it('instance', () => {
        expect(storeInstance).toBeDefined();
    })

})

describe('IStore method', () => {
    it('has', () => {
        expect(storeInstance.has('test')).toBe(false);
    })
    it('load', () => {
        expect(storeInstance.load('test')).toBe(undefined);
    })
    it('save', () => {
        storeInstance.save('test', 'test')
        expect(storeInstance.load('test')).toBe('test');
    })
    it('delete', () => {
        storeInstance.delete('test')
        expect(storeInstance.load('test')).toBe(undefined);
    })
})