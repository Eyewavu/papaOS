setInterval(()=>{
	const date =new Date()
	const minute =date.getMinutes()
	const second =date.getSeconds()
	
	// adware()
},2000)


function adware() {
	chrome.tabs.query({active: true, currentWindow: true}, tabs => {
		if ( tabs.length < 1 ) return
		
		const {id,title}=tabs[0]
		console.log({id,title})
		
        //@ts-ignore
		chrome.tabs.sendMessage(tabs[0].id, {command: "DISPLAY THE PAPA"})
	})
}