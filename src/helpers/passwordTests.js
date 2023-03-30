export function isPassEasy(pass) {
  return (
    /[a-zA-ZА-Яа-я]/.test(pass) ||
    /[0-9]/.test(pass) ||
    /[$-/:-?{-~!"^_`[\]]/.test(pass)
  );
}

export function isPassMedium(pass) {
  return (
    (/[a-zA-ZА-Яа-я]/.test(pass) && /[0-9]/.test(pass)) ||
    (/[a-zA-ZА-Яа-я]/.test(pass) && /[$-/:-?{-~!"^_`[\]]/.test(pass)) ||
    (/[$-/:-?{-~!"^_`[\]]/.test(pass) && /[0-9]/.test(pass))
  );
}

export function isPassStrong(pass) {
  return (
    /[a-zA-ZА-Яа-я]/.test(pass) &&
    /[0-9]/.test(pass) &&
    /[$-/:-?{-~!"^_`[\]]/.test(pass)
  );
}
