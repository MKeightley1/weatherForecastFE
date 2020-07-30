## Weather forecast app

### Installation 

Install laravel composer
```
composer install
```

Install npm modules
```
npm install
```

Create `.env`

```
cp .env.example .env
```


Add Open weather map api key

```
OPENWEATHERMAP_API_KEY=<API_KEY>
```

Generate keys
```
php artisan key:generate
```



Run php environment

```
php artisan serve
```

Run node environment
```
npm npm run watch
```


### Fronend

Select a city to view a forecast. 

The list contains an invalid city to demonstrate error handling.

### Report

Print a forecast report for one or more cities
 
```
> php artisan forecast:city --cities=Brisbane
Forecast for Brisbane
+----------+--------+---------+-----------+----------+--------+
| Brisbane | Monday | Tuesday | Wednesday | Thursday | Friday |
+----------+--------+---------+-----------+----------+--------+
| Temp Min | 21.35  | 19.49   | 20.09     | 20.77    | 21.84  |
| Temp Max | 40.51  | 28.77   | 27.86     | 28.9     | 33.46  |
| Humidity | 65     | 70      | 66        | 71       | 70     |
| Weather  | Clouds | Clouds  | Clouds    | Clouds   | Clear  |
+----------+--------+---------+-----------+----------+--------+
```


### Additional Front-end work

### How to use
Once both node and php servers are running - navigate to the url: http://127.0.0.1:8000/
1. A dropdown meny should appear with a empty table set.
2. Select a city and the corresponding weather forecast should appear.

### Design/ Decisions made
1. Added code to the app.js for react capability by create a parent and child class relationship. Maybe in future break this down further, build units and follow the framework.
2. Currently only log errors in console - might be a better way to handle this expecially for API issues.
3. Attempted to use tailwind but was not sure how far to go with css. Might need to add more to the dropdown in future.
4. Should have seperated the fetch out of the component so it could be re-used through out code.
5. Components are very specific - would have like to make them more generic and re-usable.

### Limitations/issues
1. Have hardcoded list of Australian cities for demonstrate
2. A bug was found where the user needs to select a city a second time to trigger data in to display
3. 2 classes were coded in 1 file - prefer to seperate these.



