#!/bin/sh

echo "starting fastify application..."

while ! pg_isready -h $DB_HOST -p $DB_PORT; do
    echo "Waiting for PostgreSQL database connection..."
    sleep 1
done

echo "PostgreSQL database is ready!"

echo "RUNNING CONTAINER COMMANDS"

npx prisma generate
npx prisma migrate dev
# TODO: seed command goes here
npm run build
npm run start