function muda (){
    const cores = ['blue', 'yellow', 'red', 'green', 'brown', 'orange', 'blueviolet'];
    const hello = document.querySelector('.first');
    const color =  cores.sort(comparador);
    hello.innerHTML = `
    <h1 class='${color[0]}'>Hello world, hello Dio :)</h1>
    
    `

}

function comparador() { 
	return Math.random() - 0.5; 
}