const net = require('net');
const readline = require('readline');

const client = new net.Socket();

client.connect(5000, '127.0.0.1', () => {
    console.log("Conexion exitosa");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input) => {
        client.write(input);
    });
});

client.on('close', () => {
    console.log("Conexion terminada");
});

client.on('data', (data) => {
    console.log(`Servidor: ${data}`);
});

client.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});
