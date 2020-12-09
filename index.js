let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
  newDriver = Object.assign({}, driver, {[key]: value})
  delete driver.key
  return driver
}