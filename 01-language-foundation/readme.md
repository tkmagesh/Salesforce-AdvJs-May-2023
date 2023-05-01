
Create an application folder (01-language-foundation)

cd 01-language-foundation

npm init -y

npm install jest

Modify the package.json file with the following:
    Replace the following 
    "scripts" : {
        "test": "echo \"Error: no test specified\" && exit 1"
    }

    with
    "scripts" : {
        "test": "jest"
    }

Run the tests
    npm test