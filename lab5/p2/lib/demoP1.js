let ckk_uppercase = (stringParam) => {
    if (stringParam.charAt(0).toUpperCase() === stringParam.charAt(0)) {
        console.log(`${stringParam} has the first character as uppercase.`);
    } else if (stringParam.charAt(0).toUpperCase() !== stringParam.charAt(0)) {
        console.log(`${stringParam} does not have the first character as uppercase.`);
    }
}

ckk_uppercase("Kku");
ckk_uppercase("kku");