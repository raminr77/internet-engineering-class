
const conv = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹']

export const convertNumber = (number) => {
    number = typeof number === 'string' ? number : number.toString();
    conv.forEach((n,i)=> {
        const regex = new RegExp(`${i}`,'g');
        number = number.replace(regex,n)
    })
    return number;
    
}