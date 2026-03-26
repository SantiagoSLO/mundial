from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/equipos')
def equipos():
    return render_template('home.html', _anchor='equipos')

@app.route('/calendario')
def calendario():
    return render_template('home.html', _anchor='calendario')

@app.route('/resultados')
def resultados():
    return render_template('home.html', _anchor='resultados')

@app.route('/galeria')
def galeria():
    return render_template('home.html', _anchor='galeria')

@app.route('/contacto')
def contacto():
    return render_template('home.html', _anchor='contacto')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)