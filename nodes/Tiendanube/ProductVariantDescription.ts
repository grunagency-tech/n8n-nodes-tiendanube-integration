import {
    INodeProperties,
} from 'n8n-workflow';

export const productVariantOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['productVariant'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new product variant',
                action: 'Create a product variant',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a product variant',
                action: 'Delete a product variant',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a product variant',
                action: 'Get a product variant',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all product variants',
                action: 'Get all product variants',
            },
            {
                name: 'Replace All (Batch)',
                value: 'replaceAll',
                description: 'Replace all variants of a product with a new set (Batch PUT)',
                action: 'Replace all product variants',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a product variant',
                action: 'Update a product variant',
            },
            {
                name: 'Update Many (Batch)',
                value: 'updateMany',
                description: 'Update multiple product variants at once (Batch PATCH)',
                action: 'Update many product variants',
            },
            {
                name: 'Update Stock',
                value: 'updateStock',
                description: 'Update stock for one or all variants of a product',
                action: 'Update product variant stock',
            },
        ],
        default: 'getAll',
    },
];

export const productVariantFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 productVariant:getAll/create etc           */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'number',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['productVariant'],
            },
        },
        description: 'The ID of the product',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productVariant:get/update/delete           */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Variant ID',
        name: 'variantId',
        type: 'number',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['get', 'update', 'delete', 'updateStock'],
            },
        },
        description: 'The ID of the product variant. Optional for Update Stock (updates all if empty).',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productVariant:create/update               */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Price',
        name: 'price',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['create', 'update', 'updateMany', 'replaceAll'],
            },
        },
        description: 'Price of the variant',
    },
    {
        displayName: 'Promotional Price',
        name: 'promotional_price',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['create', 'update', 'updateMany', 'replaceAll'],
            },
        },
        description: 'Promotional price of the variant',
    },
    {
        displayName: 'Stock Management',
        name: 'stock_management',
        type: 'boolean',
        default: true,
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['create', 'update', 'updateMany', 'replaceAll'],
            },
        },
        description: 'Whether to track stock for this variant',
    },
    {
        displayName: 'Stock',
        name: 'stock',
        type: 'number',
        default: 0,
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['create', 'update', 'updateMany', 'replaceAll'],
            },
        },
        description: 'Stock quantity (if stock management is enabled)',
    },
    {
        displayName: 'Values',
        name: 'values',
        type: 'fixedCollection',
        default: {},
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['create', 'update', 'updateMany', 'replaceAll'],
            },
        },
        options: [
            {
                name: 'property',
                displayName: 'Property',
                values: [
                    {
                        displayName: 'Value (Spanish)',
                        name: 'valueEs',
                        type: 'string',
                        default: '',
                        description: 'Value in Spanish (e.g. Rojo, Grande)',
                    },
                    {
                        displayName: 'Value (English)',
                        name: 'valueEn',
                        type: 'string',
                        default: '',
                        description: 'Value in English (e.g. Red, Large)',
                    },
                    {
                        displayName: 'Value (Portuguese)',
                        name: 'valuePt',
                        type: 'string',
                        default: '',
                        description: 'Value in Portuguese (e.g. Vermelho, Grande)',
                    },
                ],
            },
        ],
        description: 'Variant properties (e.g. Size: Large, Color: Red)',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['create', 'update', 'updateMany', 'replaceAll'],
            },
        },
        options: [
            {
                displayName: 'SKU',
                name: 'sku',
                type: 'string',
                default: '',
                description: 'Stock Keeping Unit',
            },
            {
                displayName: 'To Update Variant ID',
                name: 'id',
                type: 'number',
                default: 0,
                description: 'ID of the variant to update (Required for Batch PATCH/PUT if updating existing items)',
            },
            {
                displayName: 'Weight',
                name: 'weight',
                type: 'string',
                default: '',
                description: 'Weight of the variant',
            },
            {
                displayName: 'Width',
                name: 'width',
                type: 'string',
                default: '',
                description: 'Width of the variant',
            },
            {
                displayName: 'Height',
                name: 'height',
                type: 'string',
                default: '',
                description: 'Height of the variant',
            },
            {
                displayName: 'Depth',
                name: 'depth',
                type: 'string',
                default: '',
                description: 'Depth of the variant',
            },
            {
                displayName: 'Barcode (MPN)',
                name: 'mpn',
                type: 'string',
                default: '',
                description: 'Manufacturer Part Number / Barcode',
            },
            {
                displayName: 'Cost',
                name: 'cost',
                type: 'string',
                default: '',
                description: 'Cost of the variant',
            },
            {
                displayName: 'Age Group',
                name: 'age_group',
                type: 'options',
                options: [
                    { name: 'Newborn', value: 'newborn' },
                    { name: 'Infant', value: 'infant' },
                    { name: 'Toddler', value: 'toddler' },
                    { name: 'Kids', value: 'kids' },
                    { name: 'Adult', value: 'adult' },
                ],
                default: 'adult',
            },
            {
                displayName: 'Gender',
                name: 'gender',
                type: 'options',
                options: [
                    { name: 'Male', value: 'male' },
                    { name: 'Female', value: 'female' },
                    { name: 'Unisex', value: 'unisex' },
                ],
                default: 'unisex',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productVariant:updateStock                 */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Action',
        name: 'stockAction',
        type: 'options',
        options: [
            {
                name: 'Replace',
                value: 'replace',
                description: 'Replace current stock with new value',
            },
            {
                name: 'Variation',
                value: 'variation',
                description: 'Increase or decrease stock by value',
            },
        ],
        required: true,
        default: 'replace',
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['updateStock'],
            },
        },
        description: 'Whether to replace the stock or add/subtract from it',
    },
    {
        displayName: 'Value',
        name: 'stockValue',
        type: 'number',
        required: true,
        default: 0,
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['updateStock'],
            },
        },
        description: 'The stock value to set or increment/decrement',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 productVariant:getAll                      */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['productVariant'],
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
                resource: ['productVariant'],
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
    /* -------------------------------------------------------------------------- */
    /*                                 Batch Instructions                         */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Batch Process Instructions',
        name: 'batchNotice',
        type: 'notice',
        displayOptions: {
            show: {
                resource: ['productVariant'],
                operation: ['updateMany', 'replaceAll'],
            },
        },
        default: 'Use expressions (e.g. {{ $json.price }}) to map fields from incoming items. All <b>incoming items</b> will be processed in a single batch request.',
    },
];
