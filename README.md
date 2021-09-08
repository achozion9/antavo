## This is Symfony5.3 + React JWT token auth Application for Antavo

## Init

1. build and start the Docker container
2. composer install
3. connect database
4. create user in db
5. Generate and Put private.pem and public.pam into config/jwt folder 
   (because JWT token generation based on this)
   see the documentation: 
   https://github.com/lexik/LexikJWTAuthenticationBundle
6. Build React App   
7. reach the site: http://localhost:8000/

## 1. Docker 
check running containers: 
docker ps

docker build: 
docker-compose up -d --build

docker run container: 
docker-compose up -d

docker kill other containers: 
docker kill -comtainername-

enable port 80 for the app

## 3. 4. database commands

docker-compose exec mysql bash

mysql -u db_user -p db_pw

show databases;

GRANT ALL ON db_.* TO 'db_user'@'%' IDENTIFIED BY 'db_pw';
FLUSH PRIVILEGES;
EXIT;
    
CREATE USER 'db_user'@'localhost' IDENTIFIED BY 'db_pw';
GRANT ALL PRIVILEGES ON *.* TO 'db_user'@'localhost' WITH GRANT OPTION;

## Generate and Put private.pem and public.pam into config/jwt folder:
config/jwt/private.pem
config/jwt/public.pem

## Put it in .env file:

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=db
DB_USERNAME=db_user
DB_PASSWORD=db_pw

## Symfony5.3 Commands:

docker-compose exec app php artisan route:list

docker-compose exec app composer dump-autoload

for clear caches:

docker-compose exec app php artisan route:cache

docker-compose exec app php artisan config:cache

migration:

docker-compose exec app php artisan make:migration create_bookings_table

docker-compose exec app php artisan make:migration create_capacities_table

docker-compose exec app php artisan migrate

docker-compose exec app php artisan tinker

>>> \DB::table('migrations')->get();

## 6 Build React App. 
React Commands:

You need to build React app:

$ yarn install

$ yarn add @babel/preset-react --dev
$ yarn add react-router-dom
$ yarn add --dev react react-dom prop-types axios
$ yarn add @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime

yarn config set ignore-engines true

yarn encore dev
yarn encore dev --watch






