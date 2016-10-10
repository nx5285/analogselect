window.onload = function(){
	var tip = document.getElementById('tip');
	var list = document.getElementById('list');
	var add = document.getElementById('add');
	var type = document.getElementById('listype');
	var lis = type.getElementsByTagName('li');
	
	tip.onclick = function(e){
		list.style.display = 'block';
		e.cancelBubble = true;
	}
	type.onclick = function(e){
		e.cancelBubble = true;
		if(!e.target.span){
			e.target.className = 'check';
			create(e.target);
		}else{
			tip.removeChild(e.target.span);
			e.target.className = '';
			e.target.span = null;
		}
	}
	add.onclick = function(e){
		e.cancelBubble = true;
	}
	add.oninput = function(){
		for(var i=0; i<lis.length; i++){
			if(lis[i].innerHTML.indexOf(this.value) !== -1){
				lis[i].style.display = 'block';
			}else{
				lis[i].style.display = 'none';
			}
		}
	}
	add.onkeyup = function(e){
		if(e.which === 13 && this.value !=''){
			var onOff = true;
			for(var i=0; i<lis.length; i++){
				if(lis[i].innerHTML === this.value){
					onOff = false;
					if(!lis[i].span){
						lis[i].className = 'check';
						create(lis[i]);
					}
				}
			}
			if(onOff){
				var li = document.createElement('li');
				li.innerHTML = this.value
				type.appendChild(li);
				li.className = 'check';
				create(li);
			}
		}
	}
	function create(obj){
		var span = document.createElement('span');
		span.innerHTML = obj.innerHTML;
		tip.appendChild(span);
		obj.span = span;
	}
}
