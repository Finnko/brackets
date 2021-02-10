module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const bracketsMap = new Map();

    for (const [open, close] of bracketsConfig) {
        bracketsMap.set(open, close);
    }

    for (const char of str) {
        if (stack.length !== 0) {
            if (char === bracketsMap.get(stack[stack.length - 1])) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            stack.push(char);
        }
    }

    return !stack.length;
}
