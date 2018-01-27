isAppium() {
  [[ $INSTRUMENT == "appium" ]]
}

if isAppium; then
  npm run test:ios-appium
else
  npm run test:ios-detox
fi
