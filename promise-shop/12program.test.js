const http_request= require('./12program');
describe('Fetch JSON',()=>{
    it('should fetch data from the URL and parse the data',()=>{
        return expect(http_request).resolves.toEqual({
            "squadName" : "Super hero squad",
            "homeTown" : "Metro City",
            "formed" : 2016,
            "secretBase" : "Super tower",
            "active" : true,
            "members" : [
              {
                "name" : "Molecule Man",
                "age" : 29,
                "secretIdentity" : "Dan Jukes",
                "powers" : [
                  "Radiation resistance",
                  "Turning tiny",
                  "Radiation blast"
                ]
              },
              {
                "name" : "Madame Uppercut",
                "age" : 39,
                "secretIdentity" : "Jane Wilson",
                "powers" : [
                  "Million tonne punch",
                  "Damage resistance",
                  "Superhuman reflexes"
                ]
              },
              {
                "name" : "Eternal Flame",
                "age" : 1000000,
                "secretIdentity" : "Unknown",
                "powers" : [
                  "Immortality",
                  "Heat Immunity",
                  "Inferno",
                  "Teleportation",
                  "Interdimensional travel"
                ]
              }
            ]
          })
    })
}

)