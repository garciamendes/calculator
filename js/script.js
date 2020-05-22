let date = new Date().getFullYear()

document.getElementById('data').innerHTML = date

function insert(num) {
  document.form.textview.value = document.form.textview.value + num
}

function equal() {
  let exp = document.form.textview.value

  if (exp) {
    document.form.textview.value = eval(exp)
  }
}

function clean() {
  document.form.textview.value = ""
}

function remove() {
  let exp = document.form.textview.value

  document.form.textview.value = exp.substring(0, exp.length - 1)
}