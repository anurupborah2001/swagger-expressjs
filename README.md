				SWAGGER  API  DOCUMENTATION
To Start swagger Project need to install Swagger First
1.	npm install –g swagger
2.	Create a Swagger Project : swagger project create <project-name>
3.	Start a Swagger Project : swagger project start <project-name>
4.	Edit the Swagger document : swagger project edit
5.	Generate Swagger Mock API Response : swagger project start –m (mock mode)
6.	Install Elastic Search : npm install  --save elasticsearch
7.	Install Cors for Cross Domain Request : npm install cors –save
8.	Install Windows Build Tools : npm install -g windows-build-tools
npm install -g npm-windows-upgrade
9.	Monitoring the API time or monitor the function time of API
It consists of two parts  [seconds, microseconds]
process.hrtime()
let a= process.hrtime();
process.hrtime(a); //it gives the time for the process from the time a is defined and till the time the process is called.

In order to track the performance of the API we can create the monitor function and create a monitoring script to monitor the timings of the API call.
This helps in knowing the performance of the API in Kibana.
10.	Load testing  for the App – Apache Jmeter (http://jmeter.apache.org/download_jmeter.cgi )
