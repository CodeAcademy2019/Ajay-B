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
describe('setOfValuesPerFrame',()=>{
    it('should return the array of scores that are to be considerd while finding the total score of one frame',()=>{
        expect(scoreBowling.setOfValuesPerFrame(10,10,2,3)[0]).toEqual([10,10,2]);
    })
    it('should return the array of scores that are to be considerd while finding the total score of one frame',()=>{
        expect(scoreBowling.setOfValuesPerFrame(9,1,2,3)[0]).toEqual([9,1,2]);
    })
    it('should not return anything other than the array of scores that are to be considerd while finding the total score of one frame',()=>{
        expect(scoreBowling.setOfValuesPerFrame(9,1,2,3)[0]).not.toEqual([9,1,2,3]);
    })
    

})

describe('rolls',()=>{
    it('should return the array of scores that are to be considerd while finding the total score of all frames',()=>{
        expect(scoreBowling.rolls(10,10,2,3)).toEqual([[10,10,2],[10,2,3],[2,3]]);
    })
    it('should return the array of scores that are to be considerd while finding the total score of all frames',()=>{
        expect(scoreBowling.rolls(9,1,2,3)).toEqual([[9,1,2],[2,3]]);
    })
    it('should not return anything other than the array of scores that are to be considerd while finding the total score of allframes',()=>{
        expect(scoreBowling.rolls(9,1,2,3)).not.toEqual([[9,1,2]]);
    })
    

})
describe('score',()=>{
    it('should return the total score of all frames',()=>{
        expect(scoreBowling.score([[6,4,3],[3,0],[10,0,0]])).toEqual(26)
    })
    it('should not return anything other than return the total score of all frames',()=>{
        expect(scoreBowling.score([[6,4,3],[3,0],[10,0,0]])).not.toEqual(25)
    })
})
