import { validName } from '../src/components/user/user.service'

describe('User service', () => {
    it('isValidName: should return true', () => {
        const result = validName('amgad')
        expect(result).toBeTruthy()
    })

    it('isvalidName: should return false', () => {
        const result = validName('ab')
        expect(result).toBeFalsy()
    })
})



