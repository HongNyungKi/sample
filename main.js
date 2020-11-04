const result = document.querySelector('.value');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    if(result.value == "수학자"){
        alert('정답입니다~~!!@@ 상금 3마넌!!!')
    }else{
        alert("땡!!! 친구에게 관심이 없군요? 상금은 알아서 찾으세여~~^^")
    }
})