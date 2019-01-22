const scoreBowling=require('./ScoringBowling');

describe('testInput',()=>{
    it('should return Invalid number of frames if the game is not yet finished(that is frame length<10)',()=>{
        expect(scoreBowling.validateInput(3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6)).toEqual(10);
    });

});
