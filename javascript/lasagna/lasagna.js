export const EXPECTED_MINUTES_IN_OVEN = 40;
export const minutesPerLayer = 2;

export function remainingMinutesInOven (minutes){
    return EXPECTED_MINUTES_IN_OVEN - minutes;
}
export function preparationTimeInMinutes (c){
    return c * minutesPerLayer;
}
export function totalTimeInMinutes (numberOfLayers, actualMinutesInOven){
    return  preparationTimeInMinutes(numberOfLayers)+ actualMinutesInOven;
}
