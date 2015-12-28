# tig-coord
Web app and api using GitHub's api

12/17/15 -- initial setup

-- mocha, supertest and heartbeat
Run tests: mocha
Continuous testing: mocha -w
Start server: npm start
Check heartbeat: curl -i http://127.0.0.1:3000/heartbeat

-- nconf
Set up configuration files.  No more hard coding port numbers, URLs, etc.

-- winston, express logger
Generates log files.

-- Automation with grunt-cli, grunt, grunt-cafe-mocha, and grunt-env

