const http = require('http'),
      fs   = require('fs'),
      path = require('path'),
      port = 3000

const contentTypes = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
}

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    case '/script.js':
      sendFile( response, 'script.js' )
      break
    case '/palette-screenshot.png':
      sendFile( response, 'palette-screenshot.png' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   const ext = path.extname( filename )
   response.writeHead( 200, { 'Content-Type': contentTypes[ext] || 'text/plain' } )
   fs.readFile( filename, function( err, content ) {
     if ( err ) {
       response.end( '404 Error: File Not Found' )
       return
     }
     response.end( content, 'utf-8' )
   })
}