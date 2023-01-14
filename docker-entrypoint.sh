#!/bin/sh

# wait-for-postgres.sh
until PGPASSWORD=$PASSWORD PGUSER=$USER PGHOST=$DB_HOST PGDATABASE=$POSTGRES_DB_PREFIX"_"$DB_NAME psql -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up"
exec "$@"