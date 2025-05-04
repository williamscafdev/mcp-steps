import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

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

server.tool("fetch-product-by-title", "Get product model by id",{
    title: z.string().describe("Title of the product"),
}, async (title) => {
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

    for (let i = 0; i < product.length; i++) {
        if (product[i].title === title.title) {
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(product[i]),
                    }
                ]
            }
        }
    }

    return {
        content: [
            {
                type: "text",
                text: "Product not found",
            }
        ]
    }
})

const transport = new StdioServerTransport();
await server.connect(transport);