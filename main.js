// VARIABLES
const time_watch = document.querySelector('.watch .time')

const start_btn = document.getElementById('start')
const stop_btn = document.getElementById('stop')
const reset_btn = document.getElementById('reset')

let seconds = 0
let interval = null

// Event Listener
start_btn.addEventListener('click', start)
stop_btn.addEventListener('click', stop)
reset_btn.addEventListener('click', reset)

// Update Timer
function timer() {
  seconds++

  // Fromat timer
  let hrs = Math.floor(seconds / (60 * 60))
  let mins = Math.floor((seconds - hrs * 3600) / 60)
  let secs = seconds % 60

  if (hrs < 10) hrs = '0' + hrs
  if (mins < 10) mins = '0' + mins
  if (secs < 10) secs = '0' + secs

  time_watch.innerText = `${hrs}:${mins}:${secs}`
}

function start() {
  if (interval) return

  start_btn.classList.add('active')

  interval = setInterval(timer, 1000)
}

function stop() {
  clearInterval(interval)

  start_btn.classList.remove('active')

  interval = null
}

function reset() {
  stop()

  seconds = 0
  time_watch.innerText = '00:00:00'
}
