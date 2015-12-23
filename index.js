var port = process.env.PORT || 8888;
 
function onRequest(request, response) {
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("Halo Word!");
 response.end();
}
 
http.createServer(onRequest).listen(8888);
