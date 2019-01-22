const scoreBowling=require('./ScoringBowling');

describe('testInput',()=>{
    it('should return number of frames if the game is finished(that is frame length=10)',()=>{
        expect(scoreBowling.validateInput(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)).toEqual(10);
    });
    it('should return "Invalid number of frames" if the game is not yet finished(that is frame length<10)',()=>{
        expect(scoreBowling.validateInput(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3)).toEqual('Invalid number of frames');
    });

});
