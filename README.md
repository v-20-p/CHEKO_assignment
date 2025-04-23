# CHEKO app

### add .env file in backend(CHEKO folder):

```
POSTGRES_DB=mydb
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydb
SPRING_DATASOURCE_USERNAME=myuser
SPRING_DATASOURCE_PASSWORD=mypassword
```


### to Run the app  :
```bash
docker compose up -d
```
### to Run seeds for Menu list :
```bash
docker exec -it postgres_CHEKO  bash seed.sh
```

Service	URL
- Frontend	http://localhost:3000
- Backend API	http://localhost:3001
- PostgreSQL	localhost:5436
