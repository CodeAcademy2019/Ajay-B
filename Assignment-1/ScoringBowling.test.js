const scoreBowling=require('./ScoringBowling');

describe('validateInput',()=>{
    it('should return "true" if the game is finished(that is rolls length is 20 or 21)',()=>{
        expect(scoreBowling.validateInput(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)).toEqual(true);
    });
    it('should return "Invalid number of frames" if the game is not yet finished(that is rolls length is<20 or >21 '),()=>{
        expect(scoreBowling.validateInput(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3)).toEqual('Invalid number of frames');
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
