##  Kafka: Comunicación entre microservicios con Apache Kafka y Javascript

# 1.- Descargar Apache Kafka  http://kafka.apache.org/ , descomprimir y entrar a la carpeta bin

# 2.- Arrancamos Zookeeper que es la herramienta o proyecto que usa Kafka para gestionar su cluster.
Con las configuraciones por defecto: zookeeper.properties
Nueva Consola
<KAFKA_HOME>/bin/zookeeper-server-start.sh config/zookeeper.properties

# 3.- Arrancamos Kafka : Es el broker kafka

Con las configuraciones por defecto: server.properties
Nueva Consola
<KAFKA_HOME>/bin/kafka-server-start.sh config/server.properties

# 4.- Crear 'topic' en Apache Kafka

Apache Kafka gestiona los mensajes mediante listas o 'topics'. Básicamente los mensajes se enví­an a una lista y uno se subscribe a la lista.

Esto lo hemos hecho de la siguiente manera:

# Creamos nuestro primer topic 'test'
Nueva Consola
<KAFKA_HOME>/bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test

Resultado:
Created topic test.

# Comprobamos que existe
Nueva Consola
<KAFKA_HOME>/bin/kafka-topics.sh --list --bootstrap-server localhost:9092

Resultado:
test


# 5.- Teseo de envío y recepción de mensajes

Productores y consumidores mediante lí­nea de comandos

Podemos trastear el uso de mandar mensajes y recibirlos mediante un par de scripts que tenemos disponibles en Apache Kafka. Para crear tanto un productor como un consumidor lo haremos de la siguiente manera:

# Productor
Nueva Consola
<KAFKA_HOME>/bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test

# Consumidor
Nueva Consola
<KAFKA_HOME>/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning


# 6.- Probar la aplicacion JavaScript que use mensajería con Kafka

Esta aplicación de Javascript es un ejemplo para dar pie a que se puedan desarrollar microservicios en Javascript interactuando con kafka. 
(Solo requiere la dependencia de 'kafka-node'):

node index.js 

Resuultado:

{
  topic: 'test',
  value: 'Mensaje automático cada 5 seg.',
  offset: 2,
  partition: 0,
  highWaterOffset: 3,
  key: null
}
{
  topic: 'test',
  value: 'Mensaje automático cada 5 seg.',
  offset: 3,
  partition: 0,
  highWaterOffset: 4,
  key: null
}
{
  topic: 'test',
  value: 'Mensaje automático cada 5 seg.',
  offset: 4,
  partition: 0,
  highWaterOffset: 5,
  key: null
}
{
  topic: 'test',
  value: 'Mensaje automático cada 5 seg.',
  offset: 5,
  partition: 0,
  highWaterOffset: 6,
  key: null
}
{
  topic: 'test',
  value: 'Mensaje automático cada 5 seg.',
  offset: 6,
  partition: 0,
  highWaterOffset: 7,
  key: null
}
{
  topic: 'test',
  value: 'Mensaje automático cada 5 seg.',
  offset: 7,
  partition: 0,
  highWaterOffset: 8,
  key: null
}

## Fuente

[Albert Coronado](https://www.albertcoronado.com/2020/05/20/comunicacion-entre-microservicios-con-apache-kafka-y-javascript/ ) - Comunicación entre microservicios con Apache Kafka y Javascript

