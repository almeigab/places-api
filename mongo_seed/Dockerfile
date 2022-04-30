FROM mongo:5.0

ARG MONGODB_URL

ENV MONGODB_URL ${MONGODB_URL}

COPY places.json /places.json

CMD mongoimport --uri ${MONGODB_URL} --collection places --drop --file /places.json --jsonArray
