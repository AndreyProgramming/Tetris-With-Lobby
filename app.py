from audioop import mul
from email.policy import default
from flask import Flask, redirect, url_for, render_template, request, make_response, flash, session
# from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy

from models.Multiplayer import *


app = Flask(__name__)
app.config['SECRET_KEY'] = 'djvnksocebclfenfevl'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///usersTetris.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

multiplayer = Multiplayer();

class Item(db.Model):
	id_ = db.Column(db.Integer, primary_key = True)
	name_ = db.Column(db.String(20), nullable = False)
	email_ = db.Column(db.String(30), nullable = False)
	password_ = db.Column(db.String(20), nullable = False)
	accessLevel_ = db.Column(db.Integer, primary_key = False, default=0)

def renderIndex():
	return render_template(
		"/html/index.html", 
		logged_in=('username' in session), 
		access_level=Item.query.filter_by(name_ = session['username']).first()
		)

@app.route("/", methods = ['POST', 'GET'])
def home():
	if 'username' in session:
		renderIndex()
		
	if request.method == "POST":
		name_or_email_ = request.form['name']
		password_ = request.form['password']
		session['username'] = request.form['name']
		if Item.query.filter_by(name_ = name_or_email_).first() or \
			Item.query.filter_by(email_ = name_or_email_).first():
			if Item.query.filter_by(password_ = password_).first():
				return redirect('/')
			else:
				error_Incorrect = 'Incorrect password'
				return render_template("/html/login.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
		else:
			error_Incorrect = 'Incorrect data'
			return render_template("/html/login.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
	else:	
		return render_template("/html/login.html", logged_in=('username' in session))


@app.route("/login", methods = ['POST', 'GET'])
def login():
	if 'username' in session:
		renderIndex()

	if request.method == "POST":
		name_or_email_ = request.form['name']
		password_ = request.form['password']
		session['username'] = request.form['name']
		if Item.query.filter_by(name_ = name_or_email_).first() or \
			Item.query.filter_by(email_ = name_or_email_).first():
			if Item.query.filter_by(password_ = password_).first():
				return redirect('/')
			else:
				error_Incorrect = 'Incorrect password'
				return render_template("/html/login.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
		else:
			error_Incorrect = 'Incorrect data'
			return render_template("/html/login.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
	else:
		return render_template("/html/login.html", logged_in=('username' in session))


@app.route("/register", methods = ['POST', 'GET'])
def register():
	if request.method == "POST":
		name_ = request.form['name']
		email_ = request.form['email']
		password_ = request.form['password']

		if Item.query.filter_by(name_ = name_).first() or \
		    Item.query.filter_by(email_ = email_).first():
			error_Incorrect = 'This user already exist'
			return render_template("/html/registration.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))

		item = Item(name_ = name_, email_ = email_, password_ = password_)

		try:
			db.session.add(item)
			db.session.commit()
			return redirect('/')
		except Exception as e:
			print(e)
			error_Incorrect = 'UNKNOWN DATABASE ERROR\nHis text:\n' + e
			return render_template("/html/registration.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
	else:
		return render_template("/html/registration.html", logged_in=('username' in session))

@app.route("/lobby", methods = ['POST', 'GET'])
def lobby():
	if 'username' in session:
		return render_template("/html/lobby.html", logged_in=('username' in session))

	if request.method == "POST":
		name_or_email_ = request.form['name']
		password_ = request.form['password']
		session['username'] = request.form['name']
		if Item.query.filter_by(name_ = name_or_email_).first() or \
			Item.query.filter_by(email_ = name_or_email_).first():
			if Item.query.filter_by(password_ = password_).first():
				return redirect('/')
			else:
				error_Incorrect = 'Incorrect password'
				return render_template("/html/login.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
		else:
			error_Incorrect = 'Incorrect data'
			return render_template("/html/login.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
	else:
		return render_template("/html/login.html", logged_in=('username' in session))


@app.route("/create_lobby", methods = ['POST', 'GET'])
def create_lobby():
	plr = Player(session['username'])
	multiplayer.createNewLobby(plr)

@app.route("/join_lobby", methods = ['POST', 'GET'])
def join_lobby():
	keycode = request.form['keycode']
	plr = Player(session['username'])
	multiplayer.joinLobby(plr, keycode)

@app.route("/logout", methods = ['POST', 'GET'])
def logout():
	session.pop('username', None)
	if request.method == "POST":
		name_or_email_ = request.form['name']
		password_ = request.form['password']
		session['username'] = request.form['name']
		if Item.query.filter_by(name_ = name_or_email_).first() or \
			Item.query.filter_by(email_ = name_or_email_).first():
			if Item.query.filter_by(password_ = password_).first():
				return redirect('/')
			else:
				error_Incorrect = 'Incorrect password'
				return render_template("/html/login.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
		else:
			error_Incorrect = 'Incorrect data'
			return render_template("/html/login.html", error_Incorrect=error_Incorrect, logged_in=('username' in session))
	else:
		return render_template("/html/login.html", logged_in=('username' in session))


if __name__ == "__main__":
	app.run(debug = True, port = 2356)