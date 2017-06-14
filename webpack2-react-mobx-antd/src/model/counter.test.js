import Counter from './counter'

describe("Counter Model", () => {
    let counter = null

    beforeEach(() => {
        counter = new Counter()
    })

    it("creates new Counter", () => {
        // const counter = new Counter()
        expect(counter.count).toBe(0)
    })
    
    it("increments", () => {
        // const counter = new Counter()
        counter.increment()
        expect(counter.count).toBe(1)      
    })

    it("resets after incrementing", () => {
        // const counter = new Counter()
        const n = 3
        for (let i = 0 ; i < n; i++) {
            counter.increment()
        }
        expect(counter.count).toBe(n)
        counter.reset()
        expect(counter.count).toBe(0)
    })
})