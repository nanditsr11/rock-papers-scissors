import http.server
import socketserver

PORT = 8000

class GameHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        super().do_GET()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), GameHandler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()

# Open (http://localhost:8000) after running the program