
## Getting Started


### Prerequisites

```
Node, npm, git, nodemon
```

### Installing/Running

```
- Clone the repository
- cd server
- npm install
- nodemon index.js
```

The project is using nodemon as a global dependency. 
If you don't have it, you can either run **node index.js** or run the following command:

```
npm install nodemon -g --save
```


### Configuration

In order to connect to mysql database you will need to add your user credentials into a **config.json** file as follows:

```
{
"user" : "root",
"password" : "password",
"host" :"localhost"
}
```

The file path should be **server/config.json**.
