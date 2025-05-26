#!/bin/bash

export $(grep -v '^#' .env | xargs)
FILES=*.sql

echo Running seeding for data in $FILES
export PGPASSWORD=${POSTGRES_PASSWORD}
for f in $FILES
do


  psql -h db -U ${POSTGRES_USER} -d ${POSTGRES_DB} < $f
done