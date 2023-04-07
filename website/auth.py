from flask import Blueprint

auth = Blueprint('auth',__name__)

@auth.route('/login')
def login():
    return '<h2>hi im login page </h2>'

@auth.route('/logout')
def log_out():
    return '<h2>hi im logot page </h2>'
    
@auth.route('/sign-up')
def sign_up():
    return '<h2>hi im signUp page </h2>'
