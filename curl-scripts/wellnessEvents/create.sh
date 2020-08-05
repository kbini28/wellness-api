#!/bin/bash

API="http://localhost:4741"
URL_PATH="/wellnessEvents"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "wellnessEvent": {
      "date": "'"${DATE}"'",
      "startTime": "'"${START}"'",
      "endTime": "'"${END}"'",
      "eventType": "'"${TYPE}"'"
    }
  }'

echo
