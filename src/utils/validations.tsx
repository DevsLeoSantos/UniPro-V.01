export const phoneNumber = /\([1-9]{2}\) 9[1-9]\d{3}-\d{4}/;
export const emailClient = /^[a-z0-9._%+-]+@[a-z0-9.-]+. [a-z]{2,4}$/;

export function ValidatePhone( ){

  const phoneMask = (value: any) => {
    if (!value) return ""
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }
  phoneMask
}

