function greet(name) {
    return `Hello, ${name}! Welcome to Node.js.`;
}

const name = process.argv[2] || "World";

console.log(greet(name));