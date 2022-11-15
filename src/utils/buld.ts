const BUILD_PARAMS = {
    DEFAULT_LANG: process.env.REACT_APP_DEFAULT_LANG,
    DEFAULT_WEBSPI_URL: process.env.REACT_APP_WEBAPI_URL,
};

// проверка что все переменные заданы или имеют значение по дефолту

for (const paramName in BUILD_PARAMS) {
    const typedParamName = paramName as keyof typeof BUILD_PARAMS;
    const paramValue: string | number | undefined = BUILD_PARAMS[typedParamName];
    if (paramValue === undefined || (typeof paramValue === "number" && isNaN(paramValue as number))) {
        throw new Error(`Invalid value '${paramValue}' of environment variable '${paramName}'`);
    }
}

export default BUILD_PARAMS;
