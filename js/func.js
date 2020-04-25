const test =()=>{
  const fromInput = document.getElementById('inp').value;
  document.getElementById('text').innerText = fromInput;
}

document.getElementById('btn').addEventListener('click',test);

const sum = (a,b) =>{
  let c =a+b
  return c
}
