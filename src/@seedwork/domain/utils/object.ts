
export function deepFreeze<T>(obj: T){

    const propNames= Object.getOwnPropertyNames(obj);

    for (const propName of propNames) {

        const value = obj[propName as keyof T];

        if (value && typeof value === "object") {
            deepFreeze(value);
        }

    
        
    }

    return Object.freeze(obj);
}