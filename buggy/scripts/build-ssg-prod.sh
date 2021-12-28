#!/bin/bash
echo "Showing running docker containers"
docker ps
echo "Connecting to express_prod and building it with Next.js"
docker exec -ti $(docker ps -f "name=express" | grep "prod" |  cut -f 1 -d ' ') npm run build:prod
echo "Connecting to express_prod and exporting it with Next.js SSG"
docker exec -ti $(docker ps -f "name=express" | grep "prod" |  cut -f 1 -d ' ') npm run export:prod
echo "Process finished"
