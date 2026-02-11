import {
    IHookFunctions,
    IWebhookFunctions,
    IDataObject,
    INodeType,
    INodeTypeDescription,
    IWebhookResponseData,
} from 'n8n-workflow';

import {
    tiendanubeApiRequest,
} from '../Tiendanube/GenericFunctions';

export class TiendanubeTrigger implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Tiendanube Trigger',
        name: 'tiendanubeTrigger',
        icon: 'file:tiendanube.svg',
        group: ['trigger'],
        version: 1,
        description: 'Handle Tiendanube Webhooks',
        defaults: {
            name: 'Tiendanube Trigger',
        },
        inputs: [],
        outputs: ['main'],
        credentials: [
            {
                name: 'tiendanubeApi',
                required: true,
            },
        ],
        webhooks: [
            {
                name: 'default',
                httpMethod: 'POST',
                responseMode: 'onReceived',
                path: 'webhook',
            },
        ],
        properties: [
            {
                displayName: 'Event',
                name: 'event',
                type: 'options',
                required: true,
                default: 'order/created',
                description: 'The event to listen to',
                options: [
                    {
                        name: 'Order Created',
                        value: 'order/created',
                    },
                    {
                        name: 'Order Updated',
                        value: 'order/updated',
                    },
                    {
                        name: 'Product Created',
                        value: 'product/created',
                    },
                    {
                        name: 'Product Updated',
                        value: 'product/updated',
                    },
                    {
                        name: 'Product Deleted',
                        value: 'product/deleted',
                    },
                    {
                        name: 'Customer Created',
                        value: 'customer/created',
                    },
                    {
                        name: 'Customer Updated',
                        value: 'customer/updated',
                    },
                    {
                        name: 'Checkout Created',
                        value: 'checkout/created',
                    },
                    {
                        name: 'Checkout Updated',
                        value: 'checkout/updated',
                    },
                ],
            },
        ],
    };

    webhookMethods = {
        default: {
            async checkExists(this: IHookFunctions): Promise<boolean> {
                const webhookUrl = this.getNodeWebhookUrl('default');
                const event = this.getNodeParameter('event') as string;
                // Get all webhooks to check if ours exists
                const webhooks = await tiendanubeApiRequest.call(this, 'GET', 'webhooks');

                for (const webhook of webhooks) {
                    if (webhook.url === webhookUrl && webhook.event === event) {
                        return true;
                    }
                }
                return false;
            },
            async create(this: IHookFunctions): Promise<boolean> {
                const webhookUrl = this.getNodeWebhookUrl('default');
                const event = this.getNodeParameter('event') as string;
                const body = {
                    url: webhookUrl,
                    event: event,
                };
                await tiendanubeApiRequest.call(this, 'POST', 'webhooks', body);
                return true;
            },
            async delete(this: IHookFunctions): Promise<boolean> {
                const webhookUrl = this.getNodeWebhookUrl('default');
                const event = this.getNodeParameter('event') as string;
                const webhooks = await tiendanubeApiRequest.call(this, 'GET', 'webhooks');

                for (const webhook of webhooks) {
                    if (webhook.url === webhookUrl && webhook.event === event) {
                        await tiendanubeApiRequest.call(this, 'DELETE', `webhooks/${webhook.id}`);
                        return true;
                    }
                }
                return false;
            },
        },
    };

    async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
        const req = this.getRequestObject();
        return {
            workflowData: [
                [
                    {
                        json: req.body as IDataObject,
                    },
                ],
            ],
        };
    }
}
