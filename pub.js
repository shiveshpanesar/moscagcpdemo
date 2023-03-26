// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://34.131.212.23:1883')
var topic = 'LINTANGtest123'
var message = 'Hello World!'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000)
})