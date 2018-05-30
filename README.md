# DEV Challenge XII
### Backend. Standard


To run project run the following commands.
```bash
docker-compose build
```
```bash
docker-compose run app npm i
```
```bash
docker-compose up
```

In console you will see `Listening on port 3000`

Now you can send POST request to [http://localhost:3000](http://localhost:3000).
Request must have header `Content-Type: application/json` and body with following structure: 
```json
{
  "urls": [
    "https://prettier.io/",
    "https://codeguida.com/"
  ]
}
```

cURL example:
```bash
curl -X POST \
  http://localhost:3000 \
  -H 'Content-Type: application/json' \
  -d '{ "urls": ["https://prettier.io/", "https://codeguida.com/"] }'
```
