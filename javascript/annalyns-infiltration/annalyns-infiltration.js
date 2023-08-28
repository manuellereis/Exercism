export let knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent;
export function canExecuteFastAttack(knightIsAwake){
    return !knightIsAwake;
}
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
    const result = [knightIsAwake, archerIsAwake, prisonerIsAwake].some((e)=>e)
    return result;
}
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
    if(archerIsAwake && prisonerIsAwake) return false;
    return prisonerIsAwake;
}
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent){
    return((prisonerIsAwake && !knightIsAwake && !archerIsAwake) || (!archerIsAwake && petDogIsPresent))
}