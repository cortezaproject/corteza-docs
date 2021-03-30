import { expect } from 'chai'
import Sample from './Sample'

describe(__filename, () => {
  describe('Sample exec result', () => {
    it('should return a string', () => {
      expect(Sample.exec()).to.eq("HelloWorld")
    })
  })
})
