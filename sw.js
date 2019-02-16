var cache1 = "c1";
this.addEventListener("install",function(event){
	event.waitUntil(

		caches.open(cache1).then(cache=>{
			cache.addAll([
				])
		})
		);

});

this.addEventListener('fetch',function(event){
	event.respondWith(
caches.open(cache1).then(function(cache){

	return cache.match(event.request).then(res=>{
		return res || fetch(event.request).then(reqres=>{
			cache.put(event.request,reqres.clone());
		})
	})
})

		)
})