const scoreBowling=require('./ScoringBowling');

describe('validateInput',()=>{
    it('should return "true" if the game has valid inputs',()=>{
        expect(scoreBowling.validateInput(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)).toEqual(true);
    });
    it('should return "false" if the game has invalid inputs',()=>{
        expect(scoreBowling.validateInput(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 13)).toEqual(false);
    });

});
describe('isStrike',()=>{
    it('should return "true" if the frame is a strike',()=>{
        expect(scoreBowling.isStrike(10)).toEqual(true);
    });
    it('should return "false" if the frame is not a strike',()=>{
        expect(scoreBowling.isStrike(6)).toEqual(false);
    });
})
describe('isSpare',()=>{
    it('should return "true" if the frame is a spare',()=>{
        expect(scoreBowling.isSpare(9,1)).toEqual(true);
    });
    it('should return "false" if the frame is not a spare',()=>{
        expect(scoreBowling.isSpare(6,3)).toEqual(false);
    });
})
