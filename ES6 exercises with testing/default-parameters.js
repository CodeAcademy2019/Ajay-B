module.exports = function midpoint(lowerBound=0,upperBound=1) {
    if(lowerBound===null || upperBound===null){
        return "Warning!Input contains null";
    }
    if(typeof(lowerBound)==='string'||typeof(upperBound)==='string'){
        return "Warning!Input contains String"
    }
    return (lowerBound+upperBound)/2
};
//module.exports = (x = 0, y = 1) => (x + y) / 2;