#!/bin/bash

rm -rf android/app/build

cd android

./gradlew clean

./gradlew assembleRelease --console=plain -S --quiet
