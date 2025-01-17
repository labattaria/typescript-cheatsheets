// A mechanism that allows you to get the type of a particular entity called a type query.
// Most often it is needed when we clearly understand what type we need in this situation and it will not be repeated further in the code.
// Implements with the typeof operator + entity operator:

const dataFromControl = {
    water: 200,
    el: 350,
};

// Right now out argument have the right type, which matches the object type dataFromControl
function checkReadings(data: typeof dataFromControl): boolean {
    const dataFromUser = {
        water: 200,
        el: 350,
    }

    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    } else {
        return false;
    }
};

// For example, you can use type quaries when the code already has an entity with the required type.
// Thereby saving us from duplication.