
const randomString = (len = 16) => {
    try {
        if (isNaN(len)) throw 'Only numbers are allowed';
        let str = '';

        let startIndex = 97
        let endIndex = 122

        while (len > 0) {
            let char = (Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex)
            str += String.fromCharCode(char)
            len--;
        }
        return str;

    }
    catch (error) {
        console.log(error)
        return null
    }
}

module.exports = randomString;