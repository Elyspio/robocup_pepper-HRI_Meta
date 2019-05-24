// import globalConfig from 'src/config/global'

const os = require("os");
const exec = require('child_process').exec;


// process.argv : interpretor, filename, your args
const user = process.argv[2] || "nao";
const ip = process.argv[3] || "192.168.42.19";
const initialWd = process.cwd();

console.log(user, ip , initialWd);
console.log("End");

// Build React project


process.chdir("./react-pepper");
exec('yarn', (err, stdout, stderr) => {
	console.error(err);
	
	console.log(stdout, stderr)
	
});



switch (os.platform()) {
	case "linux":
		exec(`echo  "put -r /media/elyspio/Works/Pepper/testIhr/react-pepper/build/* /home/nao/.local/share/PackageManager/apps/SimpleWeb/html" | sftp ${user}@${ip} `, (err, stdout, strerr) => {
			if (err) throw err;
			// exec(`echo "python /home/nao/.local/share/PackageManager/apps/SimpleWeb/app.py" | ssh ${user}@${ip}`, (err2, stdout2, strerr2) => {
			// 	if(err2) throw err2;
			// 	console.Logger("Deployement complete");
			// })
			
			console.log("Data pushed");
		});
		break;
	case "win32":
		exec(`echo  put -r P:/Pepper/react-pepper/build/ /home/nao/.local/share/PackageManager/apps/SimpleWeb/html | sftp ${user}@${ip} `, (err, stdout, strerr) => {
			if (err) throw err;
			console.error(strerr);
			// exec(`echo "python /home/nao/.local/share/PackageManager/apps/SimpleWeb/app.py" | ssh ${user}@${ip}`, (err2, stdout2, strerr2) => {
			// 	if(err2) throw err2;
			// 	console.Logger("Deployement complete");
			// })
			
			console.log("Data pushed");
		});
		break;
	
	
	default:
		break;
}

