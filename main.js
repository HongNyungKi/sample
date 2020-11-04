const result = document.querySelector('.value');
const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    if(result.value == "수학자"){
        alert('정답입니다~~!!@@ 상금 3마넌!!!')
    }else{
        alert("땡!!! 원우한테 뺨 3대 맞기!!")
    }
})