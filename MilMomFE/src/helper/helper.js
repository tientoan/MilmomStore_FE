export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const getAccountFS = () => {
    const account = localStorage.getItem(`account`);
    if(account){
        try {
            const accJson = JSON.parse(account)
            if(accJson?.username) return accJson
        } catch (error) {
            console.log(error)
        }
    }
    return undefined;
}