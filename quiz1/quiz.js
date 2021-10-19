/*const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
  .then(resp => resp.json())
  .then((data) => {
    alert(`10 GBP = ${data.rates.USD} USD`);
  });*/
$( document ).ready(function() {
    $('textarea').val('');
});
jQuery(document).ready(function() {
    $("#USD").click(function(){
			const host = 'api.frankfurter.app';
			fetch(`https://${host}/latest?amount=`+$('textarea').val()+`&from=GBP&to=USD`)
  			.then(resp => resp.json())
  			.then((data) => {
    			alert($('textarea').val()+ `GBP = ${data.rates.USD} USD`);
  	});
       $('p').val($('textarea').val()+ `GBP = ${data.rates.USD} USD`);
    }); 
});
jQuery(document).ready(function() {
    $("#CAD").click(function(){
			const host = 'api.frankfurter.app';
			fetch(`https://${host}/latest?amount=`+$('textarea').val()+`&from=GBP&to=CAD`)
  			.then(resp => resp.json())
  			.then((data) => {
    			alert($('textarea').val()+ `GBP = ${data.rates.CAD} CAD`);
  	});
       // $('textarea').val(data.rates.USD);
    }); 
});
jQuery(document).ready(function() {
    $("#KRW").click(function(){
			const host = 'api.frankfurter.app';
			fetch(`https://${host}/latest?amount=`+$('textarea').val()+`&from=GBP&to=KRW`)
  			.then(resp => resp.json())
  			.then((data) => {
    			alert($('textarea').val()+ `GBP = ${data.rates.KRW} KRW`);
  	});
       // $('textarea').val(data.rates.USD);
    }); 
});
jQuery(document).ready(function() {
    $("#CNY").click(function(){
			const host = 'api.frankfurter.app';
			fetch(`https://${host}/latest?amount=`+$('textarea').val()+`&from=GBP&to=CNY`)
  			.then(resp => resp.json())
  			.then((data) => {
    			alert($('textarea').val()+ `GBP = ${data.rates.CNY} CNY`);
  	});
       // $('textarea').val(data.rates.USD);
    }); 
});
jQuery(document).ready(function() {
    $("#JPY").click(function(){
			const host = 'api.frankfurter.app';
			fetch(`https://${host}/latest?amount=`+$('textarea').val()+`&from=GBP&to=JPY`)
  			.then(resp => resp.json())
  			.then((data) => {
    			alert($('textarea').val()+ `GBP = ${data.rates.JPY} JPY`);
  	});
       // $('textarea').val(data.rates.USD);
    }); 
});