// MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://bristle-iodized-wrinkle.glitch.me:1234')
var topic = 'LINTANGtest123'
var message = 'Hello World!'

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000)
})