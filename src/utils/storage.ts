export const localStorageGetItem = (key: string) => {
    try {
        return localStorage.getItem(key);
    }
    catch (ex: any) {
        console.warn(ex.message);
    }
    return null;
}


export const localStorageSetItem = (key: string, value: string) => {
    try {
        localStorage.setItem(key, value);
    }
    catch (ex: any) {
        console.warn(ex.message);
    }
}


export const localStorageRemoveItem = (key: string) => {
    try {
        localStorage.removeItem(key);
    }
    catch (ex: any) {
        console.warn(ex.message);
    }
}