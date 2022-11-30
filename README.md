**Set Up**

***RUN***: 
```
git clone https://github.com/PlotiHub/plotihub.git
&&
cd plotihub
```
Installing:
```
# build for development
npm install --prefix client
&&
npm start --prefix client
```
Also start rails server by running:
```
rails db:create
rails db:migrate db:seed
rails s
```
