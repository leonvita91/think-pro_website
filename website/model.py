from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func

class Note(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    data = db.Column(db.String(500))
    data = db.Column(db.DateTime(timezone=True),default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id')) # note the Foreign-key is target User class but it use the lower case inside the sql, user.id is User class and id is the object

class User(db.Model, UserMixin):
    id = db.Column(db.Integer,primary_key=True)
    nameuser = db.Column(db.String(150))
    email = db.Column(db.String(150),unique=True)
    password = db.Column(db.String(150))
    notes = db.relationship('Note') # relationship here for connecting the Note class with User class
