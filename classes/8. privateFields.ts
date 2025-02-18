// In the modern JS standard, it is already possible to create private properties and methods at the language level.
// For this, the hash symbol is used:

class ProPlayer {
    #login: string;
    private _password: string;
    public server: string;
    protected consent: boolean;
}

const pro = new ProPlayer();
// pro.#login // error

// This functionality will remain after compilation, but in different versions, depending on the established standard.
// Modifiers in TS appeared much earlier than this feature, and are necessary for compatibility with old standards.
// It makes sense to mark the most valuable and vulnerable data with #. 
// Then the inaccessibility functionality will remain in the final code.