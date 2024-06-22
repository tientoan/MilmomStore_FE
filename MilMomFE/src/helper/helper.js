import axios from "axios";

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const getAccountFS = () => {
    const account = localStorage.getItem(`account`);
    if(account){
        try {
            const accJson = JSON.parse(account)
            if(accJson?.userName) return accJson
        } catch (error) {
            console.log(error)
        }
    }
    return undefined;
}

export const getProvines = async () => {
    const provinesRaw = await axios.get('https://esgoo.net/api-tinhthanh/4/0.htm')
    return provinesRaw.data.data
}

export function convertToCustomFormat(isoString) {
    // Parse the ISO 8601 date-time string
    const date = new Date(isoString);

    // Extract the components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Format the components into the desired format
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;

    return formattedDate;
}