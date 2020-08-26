from flask import Flask

app = Flask(__name__)

@app.route('/captureButton')
def button():
    print("Hello World")
    return "Hello World"
    

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
