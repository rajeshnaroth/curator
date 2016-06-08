var proxy = require('redbird')({port: 8000});

proxy.register("localhost/web", "http://localhost:5000");
proxy.register("localhost/svc", "http://localhost:4000");
