setInterval(()=>{
	const date =new Date()
	const minute =date.getMinutes()
	const second =date.getSeconds()

	if ( minute % 2 === 0) {
		if (second %60 === 21 || second %60 === 37) {
			adware()
		}
	}

},1000)


function adware() {
	chrome.tabs.query({currentWindow:true},tabs => {
		tabs.forEach(tab => {
			let id =tab.id || 0
			chrome.tabs.sendMessage(id,{command:"DISPLAY THE PAPA"})
		})
	})
}