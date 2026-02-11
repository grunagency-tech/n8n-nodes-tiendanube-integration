# n8n-nodes-tiendanube-integration

This is an n8n community node package for **Tiendanube** (Nuvemshop). It allows you to automate workflows with your Tiendanube store, managing products, orders, customers, and more.

[n8n](https://n8n.io/) is a fair-code licensed workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n documentation.

## Credentials

You need an **Access Token** and your **Store ID** from Tiendanube/Nuvemshop.

1.  Create an App in your [Tiendanube Partner Portal](https://partners.tiendanube.com/).
2.  Install the app in your store to get the Access Token.
3.  Enter the **Access Token** and **Store ID** in the n8n credentials.

## Operations

### Tiendanube Node
This node supports the following resources and operations:

*   **Product**
    *   `Create`, `Update`, `Delete`, `Get`, `Get All`
*   **Product Image**
    *   `Create`, `Delete`, `Get`, `Get All`
*   **Product Variant**
    *   `Create`, `Update`, `Delete`, `Get`, `Get All`
*   **Order**
    *   `Create`, `Get`, `Get All`, `Update`
    *   **Operations**: `Open`, `Close`, `Cancel`
*   **Customer**
    *   `Create`, `Update`, `Delete`, `Get`, `Get All`
*   **Category**
    *   `Create`, `Update`, `Delete`, `Get`, `Get All`
*   **Coupon**
    *   `Create`, `Update`, `Delete`, `Get`, `Get All`
*   **Abandoned Checkout**
    *   `Get`, `Get All`, `Apply Coupon`
*   **Location**
    *   `Create`, `Delete`, `Get`, `Get All`
*   **Cart**
    *   `Get`, `Remove Coupon`, `Remove Line Item`
*   **Page**
    *   `Create`, `Update`, `Delete`, `Get`, `Get All`

### Tiendanube Webhooks (Trigger)
Receive real-time events from your store. Supports the following events:

*   **Order**: `Created`, `Updated`, `Paid`, `Packed`, `Fulfilled`, `Cancelled`, `Refused`, `Edited`, `Pending`, `Voided`, `Unpacked`
*   **Product**: `Created`, `Updated`, `Deleted`
*   **Customer**: `Created`, `Updated`, `Deleted`
*   **Category**: `Created`, `Updated`, `Deleted`

## Support

If you encounter any issues or have feature requests, please [open an issue](https://github.com/YOUR_USERNAME/n8n-nodes-tiendanube/issues) on GitHub.

## License

MIT

## Keywords
n8n-community-node-package
