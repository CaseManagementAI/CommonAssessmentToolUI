#!/bin/bash
# Load nvm
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Use nvm to select the Node.js version
nvm use 20.0.0 # Replace with the Node.js version you need

# Serve the React app
exec serve -s build -l 80

