export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven (minutes){
    return EXPECTED_MINUTES_IN_OVEN - minutes;
}
export function preparationTimeInMinutes (camadas){
    return camadas * 2;
}
export function totalTimeInMinutes (numberOfLayers, actualMinutesInOven){
    return (numberOfLayers * 2) + actualMinutesInOven;
}
console.log(remainingMinutesInOven(30));
console.log(preparationTimeInMinutes(2));
console.log(totalTimeInMinutes(3,20));
