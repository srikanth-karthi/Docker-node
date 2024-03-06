
module.exports = {
  apps: [
    {
      name: 'server-cluster',
      script:  'node',
      args: 'index.js',
      instances: 3,
      exec_mode: 'fork',
      increment_var: 'PORT',
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 4000
      },
      error_file: './server-cluster-err.log',
      out_file: './server-cluster-out.log'
    }
  ]
};

//kill

// tasklist /FI "IMAGENAME eq node.exe"
// taskkill /F /PID <PID>
