const formatPrice = num => {
    const numArray = num && num.toString().split("")
    if (numArray) {
      numArray.splice(-3, 0, ",")
      return "$" + numArray.join("")
    }
  }

export default formatPrice
