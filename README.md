# Model Context Protocol (MCP)
Model Context Protocol (MCP) is a protocol that allows you to create agents that can interact with each other.
## What is MCP?
MCP is a protocol that allows you to create agents that can interact with each other.

# mcp
## Installation
```bash
$ npm install
```
## install node
```bash
$ npm install -g @nestjs/cli
```
## if use nvm multi-version
```bash
$ nvm use 18
```

## Created mcp-server

# Create a new directory for our project
mkdir products
cd products

# Initialize a new npm project
npm init -y

# Install dependencies
npm install @modelcontextprotocol/sdk zod
npm install -D @types/node typescript

# Create our files
mkdir src
touch src/index.ts

## Update your package.json file
```json
{
  "type": "module",
  "bin": {
    "weather": "./build/index.js"
  },
  "scripts": {
    "build": "tsc && chmod 755 build/index.js"
  },
  "files": [
    "build"
  ],
}
```
# Create new file tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./build",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

# In file index.ts
```js
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
    name: "products",
    version: "1.0.0",
});


server.tool("fetch-product", "Get product model", async (input) => {
    const product = [
        {
            "title": "Iphone 14",
            "brand": "Apple",
            "model": "Iphone 14",
            "color": "red",
        },
        {
            "title": "Iphone 14 Pro",
            "brand": "Apple",
            "model": "Iphone 14 Pro",
            "color": "black",
        },
        {
            "title": "Iphone 13 Pro Max",
            "brand": "Apple",
            "model": "Iphone 13 Pro Max",
            "color": "yellow",
        },
        {
            "title": "Iphone 12 Pro Max",
            "brand": "Apple",
            "model": "Iphone 12 Pro Max",
            "color": "green",
        },
        {
            "title": "Iphone 14 Pro Max",
            "brand": "Apple",
            "model": "Iphone 14 Pro Max",
            "color": "white",
        },
    ];
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(product),
            }
        ]
    }
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

## Build mcp-server
```bash
$ npm run build
```

## Run mcp-server local
```bash
$ cd products/src/
$ npx -y @modelcontextprotocol/inspector npx -y tsx index.ts
```

## Click in the Mcp Inspector
🔍 MCP Inspector is up and running at http://127.0.0.1:# 🚀

# Press Connect button in the Mcp Inspector and review the mcp configuration.

# Finally, you can see the mcp configuration in the Mcp Inspector.

## Install mcp-server in IDE Trae and testing functionality.
1.- Open IDE Trae and selected in the right side in the configuration icon selected MCP.
2.- In the List selected "+ Add" button and selected Configuration Manually, then selected "Raw Config (JSON)".
3.- In the Text add new json item example:
```json
{
    "products": {
            "command": "node",
            "args": [
                "[Your-path]/index.js"
            ]
        }
}
```
4.- Validate and save the configuration.
5.- Create new Agent and selected the MCP configuration.

# Finally, you can see the mcp configuration in the IDE Trae. and the testing functionality.

# How to use mcp-server in IDE Trae?
In the chat selected @Agent and selected the mcp configuration.

# Enjoy!