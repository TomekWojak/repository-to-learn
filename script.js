function test(times, callback) {
	for(let i = 0;i <= times;i++){
        callback(i)
    }
}

const test2 = (time) => {
	console.log(time);
};

test(3, test2)