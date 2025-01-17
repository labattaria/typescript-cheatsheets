// Sometimes our literal types can contain many values, sometimes we want to reuse them in different parts of the code.
// In such situations, I would like to move such code into a separate entity of the type variable.This is what pseudonyms do:
type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
type AnimationID = string | number;

function createAnimation1(
    id: AnimationID,
    animName: string,
    timingFunc: AnimationTimingFunc,
    duration: number,
    iterCount: "infinite" | number
): void { }

// Now such values ​​are more convenient to read, you can reuse them put any types into an alias.
// They can be created inside functions, inside methods of classes or objects, inside individual modules, etc.When you need it.
// After compilation they disappear, so this possibility exists only in TS.
