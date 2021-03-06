#!/bin/bash

# kill current emulator
npm run kill-emulator:android

# TODO: add emulator creation
# get emulator name
echo "All available devices:"
emulator -list-avds

emulatorId=`emulator -list-avds | grep 22 | head -n1`
if [[ -z "$emulatorId" ]]; then
  echo "There is no available devices"
  echo "Downloading from github"
  curl -H 'Accept: application/vnd.github.v3.raw' -O -L https://github.com/isnifer/avd/raw/master/avd.zip

  # unzip into folder
  unzip ./avd.zip -d ~/.android/
  emulatorId="tipsi-android-5.1.1-22"
fi
wait

# We have to launch from $ANDROID_HOME/tools because of issue:
# https://code.google.com/p/android/issues/detail?id=235461
echo "Found next emulator: $emulatorId"

if [[ $CONTAINER_TYPE == "android-ci" ]]; then
  echo "Run emulator in container"
  $ANDROID_HOME/emulator/emulator -avd "$emulatorId" -no-window -no-audio -qemu -m 2047 -enable-kvm &
elif [[ $OS == "both" ]]; then
  $ANDROID_HOME/tools/emulator -avd "$emulatorId" &
else
  $ANDROID_HOME/tools/emulator -avd "$emulatorId" -no-window &
fi

# We love travis and
# we are dare to copy their script
# to check status of emulator
status=false
failcounter=0
timeout_in_sec=360

until [[ "$status" =~ "1" ]]; do
  status=`$ANDROID_HOME/platform-tools/adb -e shell getprop sys.boot_completed 2>&1 &`
  status=status | tr -d '\r'
  let "failcounter += 1"
  echo "Waiting for emulator to start (${failcounter}s)"

  if [[ "$status" =~ "error: closed" ]]; then
    echo "Emulator closed"
    exit 1
  fi

  if [[ $failcounter -gt timeout_in_sec ]]; then
    echo "Timeout ($timeout_in_sec seconds) reached; failed to start emulator"
    npm run kill-emulator:android
    exit 0
  fi
  sleep 1
done

echo "Emulator is ready"
