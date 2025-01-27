// This is where all the utlity or helper functions go so they can easily be tested
export function calculateTotalValue (data) {
  if (!data) {
    return null
  }

  let total = 0
  let creditTotal = 0
  let debitTotal = 0
  data.forEach(t => {
    if (t.credit) {
      creditTotal += t.amount
    } else if (t.debit) {
      debitTotal -= t.amount
    }
  })

  total = creditTotal + debitTotal

  return {
    totalValue: total,
    creditTotal,
    debitTotal
  }
}

export function validateUploadedData (data) {
  let isValid = true
  if (!data || !data.length) {
    isValid = false
    return isValid
  }

  data.forEach(t => {
    // if any required fields on upload are null or not there, return false
    if (
      t.amount === null || t.amount === 0 ||
      t.category === null || t.category === '' ||
      t.credit === null ||
      t.debit === null ||
      t.description === null || t.description === '' ||
      t.merchant_id === null || t.merchant_id === '' ||
      t.user_id === null || t.user_id === ''
    ) {
      isValid = false
    }
  })

  return isValid
}

export function buildDataForChart (inputArray) {
  if (!inputArray || !inputArray.length) {
    return null
  }

  const buildDataForChart = []
  const lookUpObj = {}

  inputArray.forEach(t => {
    if (t.debit) {
      const categoryGroup = t.category
      if (!lookUpObj[categoryGroup]) {
        lookUpObj[categoryGroup] = 0
      }

      lookUpObj[categoryGroup] = lookUpObj[categoryGroup] + t.amount
    }
  })

  for (let category in lookUpObj) {
    buildDataForChart.push({ category, amount: lookUpObj[category] })
  }

  return buildDataForChart
}
