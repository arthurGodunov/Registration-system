export const utils = {
    $: function (element, parent = null) {
        let el;
        if (parent == null) {
            el = document.querySelector(element);
        } else {
            el = parent.querySelector(element);
        }
        
        return el;
    },
    shortify: function (str, length) {
        return str.slice(0, length) + '...';
    },
    clamp: function (value, min, max) {
        if (value < min)
            value = min;
        if (value > max)
            value = max;
        return value;
    },
    encode: function (str, TKv, symbolArray) {
        const result = [];
        for (const char of str) {
            const index = symbolArray.indexOf(char);
            if (index !== -1) {
                result.push('A' + (index + TKv).toString(36) + '\x1D');
            }
            else if (!isNaN(Number(char)) && char !== ' ') {
                result.push('N' + (Number(char) + TKv).toString(36) + '\x1D');
            }
            else {
                result.push('U' + (char.codePointAt(0) + TKv).toString(36) + '\x1D');
            }
        }
        return result.join('');
    },
    decode: function (str, TKv, symbolArray) {
        const parts = str.split('\x1D').filter(Boolean);
        const result = [];
        const len = symbolArray.length;
        for (const part of parts) {
            if (part.startsWith('A')) {
                const value = part.slice(1);
                const index = (parseInt(value, 36) - TKv + len) % len;
                result.push(symbolArray[index]);
            }
            else if (part.startsWith('N')) {
                const value = part.slice(1);
                const num = (parseInt(value, 36) - TKv) % len;
                result.push(String(num));
            }
            else if (part.startsWith('U')) {
                const value = part.slice(1);
                const uniCode = parseInt(value, 36) - TKv;
                result.push(String.fromCodePoint(uniCode));
            }
        }
        return result.join('');
    },
    sleep: async function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
};
