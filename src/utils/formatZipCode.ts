export function formatZipCode(str: any){
	var re = /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/;

	if(re.test(str)){
		return str.replace(re,"$1.$2-$3");
	}else{
		alert("CEP inválido!");
	}
	
	return '';
}