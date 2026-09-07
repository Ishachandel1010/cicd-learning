#!/bin/bash
output=$(./app.sh)
expected="Hello from my CI/CD application!"

if [ "$output" == "$expected" ]; then
  echo "✅ Test passed"
  exit 0
else
  echo "❌ Test failed. Got: $output"
  exit 1
fi
