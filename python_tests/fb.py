import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate('./ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred)

uid = 'yhuai2'


custom_token = auth.create_custom_token(uid)

print(custom_token)