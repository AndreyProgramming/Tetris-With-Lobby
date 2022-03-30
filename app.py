from flask import Flask, redirect, url_for, render_template, request, flash, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'djvnksocebclfenfevl'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///usersTetris.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Item(db.Model):
	id_ = db.Column(db.Integer, primary_key = True)
	name_ = db.Column(db.String(20), nullable = False)
	email_ = db.Column(db.String(30), nullable = False)
	password_ = db.Column(db.String(20), nullable = False)


@app.route("/")
def home():
	return render_template("/html/index.html")


@app.route("/login", methods = ['POST', 'GET'])
def login():
	if request.method == "POST":
		name_or_email_ = request.form['name']
		password_ = request.form['password']
		if Item.query.filter_by(name_ = name_or_email_).first() or \
		    Item.query.filter_by(email_ = name_or_email_).first():
		    if Item.query.filter_by(password_ = password_).first():
		    	return redirect('/')
		    else:
		    	error_Incorrect = 'Incorrect password'
		    	return render_template("/html/login.html", error_Incorrect=error_Incorrect)
				
		else:
			error_Incorrect = 'Incorrect data'
			return render_template("/html/login.html", error_Incorrect=error_Incorrect)
	else:
		return render_template("/html/login.html")


@app.route("/register", methods = ['POST', 'GET'])
def register():
	if request.method == "POST":
		name_ = request.form['name']
		email_ = request.form['email']
		password_ = request.form['password']

		if Item.query.filter_by(name_ = name_).first() or \
		    Item.query.filter_by(email_ = email_).first():
		    error_Incorrect = 'This user already exist'
		    return render_template("/html/registration.html", error_Incorrect=error_Incorrect)

		item = Item(name_ = name_, email_ = email_, password_ = password_)

		try:
			db.session.add(item)
			db.session.commit()
			return redirect('/')
		except Exception as e:
			print(e)
			error_Incorrect = 'UNKNOWN DATABASE ERROR\nHis text:\n' + e
			return render_template("/html/registration.html", error_Incorrect=error_Incorrect)
	else:
		return render_template("/html/registration.html")


if __name__ == "__main__":
	app.run(debug = True, port = 2356)