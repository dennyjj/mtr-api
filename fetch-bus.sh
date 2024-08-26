#!/bin/bash

LANGUAGE=${LANGUAGE:-"en"}
ROUTE_NAME=${ROUTE_NAME:-"K17"}

curl -X POST \
    -H "Content-Type: application/json" \
    -d "{ \"language\": \"$LANGUAGE\", \"routeName\": \"$ROUTE_NAME\" }" \
    https://rt.data.gov.hk/v1/transport/mtr/bus/getSchedule \
    -o ./responses.json
