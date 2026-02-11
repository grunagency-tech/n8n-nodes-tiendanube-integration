import { INodeProperties } from 'n8n-workflow';

export const productCustomFieldOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['productCustomField'],
            },
        },
        options: [
            // Global Operations
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new custom field',
                action: 'Create a custom field',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a custom field',
                action: 'Delete a custom field',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a custom field',
                action: 'Get a custom field',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all custom fields',
                action: 'Get all custom fields',
            },
            {
                name: 'Update Options',
                value: 'update',
                description: 'Add options to a text_list custom field',
                action: 'Update custom field options',
            },
            // Relational Operations
            {
                name: 'Get by Product',
                value: 'getProductValues',
                description: 'Get custom fields assigned to a product',
                action: 'Get custom fields by product',
            },
            {
                name: 'Get Products by Field',
                value: 'getOwners',
                description: 'Get products using a specific custom field',
                action: 'Get products by custom field',
            },
            // Batch-like Operation
            {
                name: 'Update Product Values',
                value: 'updateProductValues',
                description: 'Update custom field values for a product',
                action: 'Update product custom field values',
            },
        ],
        default: 'getAll',
    },
];

export const productCustomFieldFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 productCustomField:create                  */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['productCustomField'],
                operation: ['create'],
            },
        },
        description: 'Name of the custom field',
    },
    {
        displayName: 'Value Type',
        name: 'value_type',
        type: 'options',
        required: true,
        default: 'text',
        options: [
            { name: 'Text', value: 'text' },
            { name: 'Text List (Dropdown)', value: 'text_list' },
            { name: 'Numeric', value: 'numeric' },
            { name: 'Date', value: 'date' },
        ],
        displayOptions: {
            show: {
                resource: ['productCustomField'],
                operation: ['create'],
            },
        },
        description: 'Type of value this field will hold',
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['productCustomField'],
                operation: ['create'],
            },
        },
        description: 'Description of the custom field',
    },
    {
        displayName: 'Read Only',
        name: 'read_only',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                resource: ['productCustomField'],
                operation: ['create'],
            },
        },
        description: 'Whether the field is read-only',
    },
    {
        displayName: 'Values (Comma-separated)',
        name: 'valuesList',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['productCustomField'],
                operation: ['create', 'update'],
            },
        },
        description: 'List of values for text_list type (separated by commas). For Update, this adds new options.',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productCustomField:get/delete/update/getOwners */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Custom Field ID',
        name: 'customFieldId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['productCustomField'],
                operation: ['get', 'delete', 'update', 'getOwners'],
            },
        },
        description: 'ID of the custom field',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productCustomField:getProductValues/updateProductValues */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'number',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['productCustomField'],
                operation: ['getProductValues', 'updateProductValues'],
            },
        },
        description: 'ID of the product',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productCustomField:updateProductValues     */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Custom Fields to Update',
        name: 'customFields',
        placeholder: 'Add Custom Field Value',
        type: 'fixedCollection',
        default: {},
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['productCustomField'],
                operation: ['updateProductValues'],
            },
        },
        options: [
            {
                displayName: 'Fields',
                name: 'fields',
                values: [
                    {
                        displayName: 'Custom Field ID',
                        name: 'customFieldId',
                        type: 'string',
                        default: '',
                        description: 'ID of the custom field to update',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                        description: 'Value to assign to the field',
                    },
                ],
            },
        ],
        description: 'Values to assign to the custom fields of the product',
    },
];
