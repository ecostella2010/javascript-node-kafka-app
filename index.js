// Declara mi dependencia kafka-node
const kafka = require('kafka-node');

// Declara mi cliente kafka, inicializando con el parametro kafkaHost: con la ip y puerto del kafka broker, 
// aqui le podemos pasar uno o una lista de cluster con los distintos servidores 
const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});

/* Consumidor */
let consumer = new kafka.Consumer(client, [ { topic: 'test' } ]);

consumer.on('message', function (message) {
    	
    console.log(message);

});

/* Productor */
let producer = new kafka.Producer(client);

producer.on('ready', function () {

	setInterval(function() {
  		producer.send( [ { topic: "test", messages: "Mensaje automático cada 5 seg." } ], function (err,data) {} );
		}, 5000);

});