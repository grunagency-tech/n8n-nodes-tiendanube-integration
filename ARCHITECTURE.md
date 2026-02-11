# Architecture of n8n-nodes-tiendanube-integration

This document describes the high-level architecture of the Tiendanube n8n node integration.

## Overview

This package implements a community node for n8n that connects to the [Tiendanube (Nuvemshop) API](https://tiendanube.github.io/api-documentation/intro). It allows users to perform various operations like managing orders, products, customers, and coupons directly within n8n workflows.

## Directory Structure

```
n8n-nodes-tiendanube-integration/
├── credentials/
│   └── TiendanubeApi.credentials.ts  # API Authentication definition
├── nodes/
│   └── Tiendanube/
│       ├── Tiendanube.node.ts        # Main Node Logic (Router & Execution)
│       ├── TiendanubeTrigger.node.ts # Webhook Trigger Logic
│       ├── GenericFunctions.ts       # Shared API Request Helper
│       ├── *Description.ts           # Resource Declarations (Fields & Operations)
│       └── tiendanube.svg            # Node Icon
├── package.json                      # Dependencies & n8n Metadata
└── tsconfig.json                     # TypeScript Configuration
```

## Key Components

### 1. Main Node (`Tiendanube.node.ts`)
This acts as the central controller. It:
- Defines the `INodeType` interface.
- Imports all resource definitions (fields and operations).
- Implements the `execute()` method, which routes execution to the appropriate API endpoint based on the selected `Resource` and `Operation`.
- Handles data preparation (parsing JSON, multilingual fields) before sending to the API.

### 2. Resource Descriptions (`*Description.ts`)
To keep the main node file clean, each resource (e.g., `Product`, `Order`, `Customer`) has its own description file. These files export:
- `*Operations`: Defines the actions available (e.g., `create`, `getAll`).
- `*Fields`: Defines the input parameters (UI) for those actions.

**Example:** `OrderDescription.ts` defines the inputs for creating an order, including dynamic lists and fixed collections for complex objects like `shipping_address`.

### 3. Generic Functions (`GenericFunctions.ts`)
Contains the `tiendanubeApiRequest` helper function. This function:
- Handles authentication (Bearer Token).
- Constructs the full API URL (handling API versions if needed).
- Manages HTTP headers (User-Agent, Content-Type).
- Executes the request using n8n's internal helpers.

### 4. Trigger Node (`TiendanubeTrigger.node.ts`)
Implements the `IWebhookFunctions` interface to handle incoming webhooks from Tiendanube. It registers webhooks with the Tiendanube API when the workflow is activated and deregisters them when deactivated.

## Authentication
Authentication is handled via the `TiendanubeApi.credentials.ts` file. It uses an **Access Token** and **Store ID** provided by the user. The token is sent in the `Authentication: bearer <token>` header for every request.

## Data Flow
1.  **Input:** User configures the node in n8n (selects Resource `Product`, Operation `Create`, fills fields).
2.  **Execution:** `Tiendanube.node.ts` reads these inputs.
3.  **Validation:** Input data is validated and transformed (e.g., parsing `shipping_address.number` to integer).
4.  **Request:** `GenericFunctions.ts` sends the HTTP request to Tiendanube API.
5.  **Output:** The JSON response from Tiendanube is returned to the workflow execution.
