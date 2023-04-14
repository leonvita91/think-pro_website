from flask import Blueprint ,render_template , request, flash

auth = Blueprint('auth',__name__)

@auth.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        if len(email) < 4:
            flash('Try longer Email' ,category='error')
        elif len(password) < 8:
            flash('Password Must be at least 8 Characters' ,category='error')
        else:
            flash('Welcome !! :) ' ,category='Success')
    return render_template('login.html')

@auth.route('/sign-up',methods=['GET','POST'])
def sign_up():
    if request.method == 'POST':
        name = request.form.get('nameuser')
        email = request.form.get('email')
        password = request.form.get('password')
        confirm = request.form.get('confirm_password')
        if len(name) < 2:
            flash('Username is too short !!' ,category='error')
        elif len(email) < 4:
            flash('Try longer Email' ,category='error')
        elif len(password) < 8:
            flash('Password Must be at least 8 Characters' ,category='error')
        elif password != confirm :
            flash(""" The Password Doesn't Match """ ,category='error')
        else:
            flash('Great!... Welcome to Our site :) ' ,category='Success')
    return render_template('signup.html')