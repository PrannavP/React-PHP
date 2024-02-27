# React and PHP CRUD

## Software Requirements
- XAMPP
- Visual Studio Code

### Inorder to make API calls from React you need to enable CORS in apache.
1. Configure Apache: Open the Apache configuaration file (`httpd.conf`) located in the `xampp/apache/conf` directory.
    
    Add the following lines inside the `<Directory>` section:
    - Header always set Access-Control-Allow-Origin "*"
    - Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS, DELETE, PUT"
    - Header always set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"

2. Restart Apache: After making changes to the Apache configuration, restart the Apache server for the changes to take effect and you are good to go.