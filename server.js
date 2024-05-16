const net = require('net');
const readline = require('readline');

const server = net.createServer((con) => {
    console.log("Recibi una conexión remota");

    con.write("Servidor iniciado correctamente\n");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input) => {
        con.write(input);
    });

    con.on('data', (data) => {
        console.log(`Cliente: ${data}`);
    });

    con.on('end', () => {
        console.log('Conexión terminada');
    });

    con.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
});

server.listen(5000, '127.0.0.1');
