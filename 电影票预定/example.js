const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');

// populateUI();？？？这个函数不知有何用？
let ticketPrice=+movieSelect.value;//使得一进页面默认选择的电影点击就有金额

//保存选中电影的地方和总金额
function setMonieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoivePrice',moviePrice);
}//这个用于有后台，会记录信息，同时，会时刻更新所选电影座位的金额

//更新选中的座位和价格
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    // setMonieData(movieSelect.selectedIndex, movieSelect.value);
}
          
//获取电影的数据，渲染页面 就是这个？？？？注释掉也可以跑
// function populateUI(){
//     const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
//     if(selectedSeats!==null&&selectedSeats.length>0){
//         seats.forEach((seat,index)=>{
//             if(selectedSeats.indexOf(index)>-1){
//                 seat.classList.add('selected');
//             }
//         });
//     }
//     const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');

//     if(selectedMovieIndex!==null){
//         movieSelect.selectedIndex=selectedMovieIndex;
//     }
// }



//选择电影
movieSelect.addEventListener('change',e=>{
    ticketPrice=+e.target.value;
    // setMonieData(e.target.selectedIndex,e.target.value);
    //存储本地
    updateSelectedCount();//换电影时更新票价
}); 
  

//座位选择事件
container.addEventListener('click',e=>{
    if(
        e.target.classList.contains('seat')&&
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected');
        updateSelectedCount();//更新点击座位增加金额和座位数
    }
});

//初始化座位和金额数值
// updateSelectedCount();
