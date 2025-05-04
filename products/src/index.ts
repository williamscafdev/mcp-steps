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