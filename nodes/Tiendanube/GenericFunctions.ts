import {
    OptionsWithUri,
} from 'request';

import {
    IExecuteFunctions,
    IHookFunctions,
    ILoadOptionsFunctions,
    IWebhookFunctions,
    IDataObject,
    NodeApiError,
    JsonObject,
    IRequestOptions,
} from 'n8n-workflow';

export async function tiendanubeApiRequest(
    this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions | IWebhookFunctions,
    method: string,
    resource: string,
    body: any = {},
    qs: IDataObject = {},
    uri?: string,
    option: IDataObject = {},
): Promise<any> {
    const credentials = await this.getCredentials('tiendanubeApi');

    const storeId = credentials.storeId;

    let baseUrl = `https://api.tiendanube.com/v1/${storeId}`;

    // Check if resource requires a different API version (e.g., Pages)
    // Documentation reference: https://tiendanube.github.io/api-documentation/resources/page
    if (resource === 'pages' || resource.startsWith('pages/')) {
        // Potential V2 switch if required by new API updates
        // baseUrl = `https://api.tiendanube.com/v2/${storeId}`;
    }

    const options: OptionsWithUri = {
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': credentials.userAgent as string || 'n8n-node',
            'Authentication': `bearer ${credentials.accessToken}`,
        },
        method,
        qs,
        body,
        uri: uri || `${baseUrl}/${resource}`,
        json: true,
    };

    if (Object.keys(options.qs).length === 0) {
        delete options.qs;
    }
    if (Object.keys(options.body).length === 0) {
        delete options.body;
    }

    try {
        // Cast to any because n8n-workflow types might be strict about what request library options are allowed
        return await this.helpers.request(options as any);
    } catch (error) {
        throw new NodeApiError(this.getNode(), error as JsonObject);
    }
}
