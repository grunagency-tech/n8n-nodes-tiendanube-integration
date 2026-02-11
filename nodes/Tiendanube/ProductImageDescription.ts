import {
    INodeProperties,
} from 'n8n-workflow';

export const productImageOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['productImage'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new product image',
                action: 'Create a product image',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a product image',
                action: 'Delete a product image',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a product image',
                action: 'Get a product image',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all product images',
                action: 'Get all product images',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a product image',
                action: 'Update a product image',
            },
        ],
        default: 'getAll',
    },
];

export const productImageFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 productImage:getAll/create etc             */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'number',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['productImage'],
            },
        },
        description: 'The ID of the product',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productImage:get/update/delete             */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Image ID',
        name: 'imageId',
        type: 'number',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['get', 'update', 'delete'],
            },
        },
        description: 'The ID of the product image',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productImage:create                        */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Upload Method',
        name: 'uploadMethod',
        type: 'options',
        options: [
            {
                name: 'Image URL',
                value: 'url',
            },
            {
                name: 'Base64 Attachment',
                value: 'base64',
            },
        ],
        default: 'url',
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['create'],
            },
        },
        description: 'Select how to upload the image',
    },
    {
        displayName: 'Image Source URL',
        name: 'src',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['create'],
                uploadMethod: ['url'],
            },
        },
        required: true,
        description: 'URL of the image',
    },
    {
        displayName: 'Filename',
        name: 'filename',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['create'],
                uploadMethod: ['base64'],
            },
        },
        required: true,
        description: 'Name of the image file (e.g. photo.jpg)',
    },
    {
        displayName: 'Attachment (Base64)',
        name: 'attachment',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['create'],
                uploadMethod: ['base64'],
            },
        },
        required: true,
        description: 'Base64 encoded image content string',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['create'],
            },
        },
        options: [
            {
                displayName: 'Position',
                name: 'position',
                type: 'number',
                default: 1,
                description: 'Position of the image in the product gallery',
            },
            {
                displayName: 'Alt Text',
                name: 'alt',
                type: 'string',
                default: '',
                description: 'Alternative text for the image',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productImage:update                        */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Position',
        name: 'position',
        type: 'number',
        default: 1,
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['update'],
            },
        },
        description: 'New position of the image in the gallery',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productImage:getAll                        */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['getAll'],
            },
        },
        default: false,
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['getAll'],
                returnAll: [false],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 200,
        },
        default: 30,
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['productImage'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Since ID',
                name: 'since_id',
                type: 'string',
                default: '',
                description: 'Return images created after this ID',
            },
        ],
    },
];
