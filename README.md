# react-app

# START / KOMENDY
npm start
npm run dev
heroku open

#instalacja
###serwer
- npm install
- npm start

###klient
- create-react-app client
- npm start

# HEROKU / GIT
- git init
- git add .
- git commit -m "first"
- git remote add orgin https://github.com/ghost717/react-app.git
- git push

# BUILDING STEPS
1. npm init
2. add express
- npm install --save express
- add index.js
- edit package.json
- add .gitignore

3. add heroku
- heroku login
- heroku create
- git init
- git add .
- git commit -m "first"
- git remote add heroku https://git.heroku.com/whispering-beyond-68424.git
- git push heroku master

4. google auth
- npm install --save passport passport-google-oauth20
- enabling google oauth api
- add securing keys
- add google strategy options
- add google auth callback