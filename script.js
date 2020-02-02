const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.querySelector('#movie');
var price = movieSelect.value;

// 전체 좌석 카운트
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount; // 좌석
  total.innerText = selectedSeatsCount * price; // 가격
}

// 자리 클릭
container.addEventListener('click', function(e){
  // 빈자리만 클릭
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    console.log(e.target);
    e.target.classList.toggle('selected');
    
    updateSelectedCount();
  }
})

// 영화 선택
movieSelect.addEventListener('change', function(){
  price = movieSelect.value; // 선택한 영화의 가격
  updateSelectedCount();
})