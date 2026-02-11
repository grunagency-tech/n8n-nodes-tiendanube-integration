import {
    INodeProperties,
} from 'n8n-workflow';

export const productOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['product'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new product',
                action: 'Create a product',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a product',
                action: 'Delete a product',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a product',
                action: 'Get a product',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all products',
                action: 'Get all products',
            },
            {
                name: 'Get By SKU',
                value: 'getBySku',
                description: 'Get a product by one of its variants\' SKU',
                action: 'Get a product by sku',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a product',
                action: 'Update a product',
            },
            {
                name: 'Update Stock & Price',
                value: 'updateStockPrice',
                description: 'Batch update stock and/or price for multiple products/variants',
                action: 'Update stock price in batch',
            },
        ],
        default: 'getAll',
    },
];

export const productFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 product:get/delete/update                  */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Product ID',
        name: 'productId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['get', 'delete', 'update'],
            },
        },
        description: 'The ID of the product',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 product:getBySku                           */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'SKU',
        name: 'sku',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['getBySku'],
            },
        },
        description: 'The SKU to search for',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 product:create/update                      */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Name (Multilanguage)',
        name: 'name',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        required: true,
        default: {},
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                name: 'values',
                displayName: 'Values',
                values: [
                    {
                        displayName: 'Language',
                        name: 'lang',
                        type: 'options',
                        options: [
                            { name: 'Spanish', value: 'es' },
                            { name: 'English', value: 'en' },
                            { name: 'Portuguese', value: 'pt' },
                        ],
                        default: 'es',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                    },
                ],
            },
        ],
        description: 'Product name in different languages',
    },
    {
        displayName: 'Description (Multilanguage)',
        name: 'description',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        default: {},
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                name: 'values',
                displayName: 'Values',
                values: [
                    {
                        displayName: 'Language',
                        name: 'lang',
                        type: 'options',
                        options: [
                            { name: 'Spanish', value: 'es' },
                            { name: 'English', value: 'en' },
                            { name: 'Portuguese', value: 'pt' },
                        ],
                        default: 'es',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        typeOptions: {
                            rows: 4,
                        },
                        default: '',
                    },
                ],
            },
        ],
        description: 'Product description (HTML supported)',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                displayName: 'Variant ID',
                name: 'variant_id',
                type: 'string',
                default: '',
                description: 'ID of the specific variant to update (e.g. for multi-variant products). If empty, the main variant is auto-detected.',
            },
            {
                displayName: 'Handle (Multilanguage)',
                name: 'handle',
                type: 'fixedCollection',
                typeOptions: {
                    multipleValues: true,
                },
                default: {},
                description: 'Friendly URL part in different languages',
                options: [
                    {
                        name: 'values',
                        displayName: 'Values',
                        values: [
                            {
                                displayName: 'Language',
                                name: 'lang',
                                type: 'options',
                                options: [
                                    { name: 'Spanish', value: 'es' },
                                    { name: 'English', value: 'en' },
                                    { name: 'Portuguese', value: 'pt' },
                                ],
                                default: 'es',
                            },
                            {
                                displayName: 'Value',
                                name: 'value',
                                type: 'string',
                                default: '',
                            },
                        ],
                    },
                ],
            },
            {
                displayName: 'SEO Title (Multilanguage)',
                name: 'seo_title',
                type: 'fixedCollection',
                typeOptions: {
                    multipleValues: true,
                },
                default: {},
                description: 'SEO Title in different languages',
                options: [
                    {
                        name: 'values',
                        displayName: 'Values',
                        values: [
                            {
                                displayName: 'Language',
                                name: 'lang',
                                type: 'options',
                                options: [
                                    { name: 'Spanish', value: 'es' },
                                    { name: 'English', value: 'en' },
                                    { name: 'Portuguese', value: 'pt' },
                                ],
                                default: 'es',
                            },
                            {
                                displayName: 'Value',
                                name: 'value',
                                type: 'string',
                                default: '',
                            },
                        ],
                    },
                ],
            },
            {
                displayName: 'SEO Description (Multilanguage)',
                name: 'seo_description',
                type: 'fixedCollection',
                typeOptions: {
                    multipleValues: true,
                },
                default: {},
                description: 'SEO Description in different languages',
                options: [
                    {
                        name: 'values',
                        displayName: 'Values',
                        values: [
                            {
                                displayName: 'Language',
                                name: 'lang',
                                type: 'options',
                                options: [
                                    { name: 'Spanish', value: 'es' },
                                    { name: 'English', value: 'en' },
                                    { name: 'Portuguese', value: 'pt' },
                                ],
                                default: 'es',
                            },
                            {
                                displayName: 'Value',
                                name: 'value',
                                type: 'string',
                                default: '',
                            },
                        ],
                    },
                ],
            },
            {
                displayName: 'Brand',
                name: 'brand',
                type: 'string',
                default: '',
                description: 'Product brand',
            },
            {
                displayName: 'Category IDs',
                name: 'category_ids',
                type: 'string',
                default: '',
                description: 'Comma-separated list of category IDs (e.g. 123, 456)',
            },
            {
                displayName: 'Tags',
                name: 'tags',
                type: 'string',
                default: '',
                description: 'Comma-separated tags',
            },
            {
                displayName: 'Published',
                name: 'published',
                type: 'boolean',
                default: true,
                description: 'Whether the product is published',
            },
            {
                displayName: 'Free Shipping',
                name: 'free_shipping',
                type: 'boolean',
                default: false,
                description: 'Whether the product has free shipping',
            },
            {
                displayName: 'Video URL',
                name: 'video_url',
                type: 'string',
                default: '',
                description: 'YouTube or Vimeo URL',
            },
            {
                displayName: 'Image URL',
                name: 'image_url',
                type: 'string',
                default: '',
                description: 'URL of the main product image',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 Variant Fields (Simplified)                */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'SKU',
        name: 'sku',
        type: 'string',
        default: '',
        description: 'Stock Keeping Unit of the variant',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Price',
        name: 'price',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0,
        description: 'Price of the variant',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Promotional Price',
        name: 'promotional_price',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0,
        description: 'Promotional price of the variant',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Stock',
        name: 'stock',
        type: 'number',
        default: 0,
        description: 'Stock quantity (if stock control is enabled)',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Stock Control',
        name: 'stock_control',
        type: 'boolean',
        default: true,
        description: 'Whether stock is tracked for this variant',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Weight (kg)',
        name: 'weight',
        type: 'number',
        typeOptions: {
            numberPrecision: 3,
        },
        default: 0,
        description: 'Weight of the product in kg',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Width (cm)',
        name: 'width',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0,
        description: 'Width of the product in cm',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Height (cm)',
        name: 'height',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0,
        description: 'Height of the product in cm',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Depth (cm)',
        name: 'depth',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0,
        description: 'Depth of the product in cm',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Cost',
        name: 'cost',
        type: 'number',
        typeOptions: {
            numberPrecision: 2,
        },
        default: 0,
        description: 'Cost of the product',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Barcode',
        name: 'barcode',
        type: 'string',
        default: '',
        description: 'Barcode (EAN13, UPC, etc.)',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    {
        displayName: 'Display Price',
        name: 'display_price',
        type: 'boolean',
        default: true,
        description: 'Whether to display the price in the store',
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['create', 'update'],
            },
        },
    },
    /* -------------------------------------------------------------------------- */
    /*                                 product:updateStockPrice                   */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Updates',
        name: 'stockPriceUpdates',
        type: 'fixedCollection',
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['product'],
                operation: ['updateStockPrice'],
            },
        },
        description: 'Update stock and price for multiple products and variants',
        default: {},
        options: [
            {
                displayName: 'Products',
                name: 'products',
                values: [
                    {
                        displayName: 'Product ID',
                        name: 'productId',
                        type: 'string',
                        default: '',
                        description: 'ID of the product to update',
                    },
                    {
                        displayName: 'Variants',
                        name: 'variants',
                        type: 'fixedCollection',
                        typeOptions: {
                            multipleValues: true,
                        },
                        default: {},
                        options: [
                            {
                                displayName: 'Variant Items',
                                name: 'variantItems',
                                values: [
                                    {
                                        displayName: 'Variant ID',
                                        name: 'variantId',
                                        type: 'string',
                                        default: '',
                                        description: 'ID of the variant to update',
                                    },
                                    {
                                        displayName: 'Price',
                                        name: 'price',
                                        type: 'number',
                                        default: 0,
                                        description: 'New price',
                                    },
                                    {
                                        displayName: 'Promotional Price',
                                        name: 'promotional_price',
                                        type: 'number',
                                        default: 0,
                                        description: 'New promotional price',
                                    },
                                    {
                                        displayName: 'Stock',
                                        name: 'stock',
                                        type: 'number',
                                        default: 0,
                                        description: 'New stock quantity',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 product:getAll                             */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['product'],
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
                resource: ['product'],
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
                resource: ['product'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Created After',
                name: 'created_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter products created after this date (ISO 8601)',
            },
            {
                displayName: 'Created Before',
                name: 'created_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter products created before this date (ISO 8601)',
            },
            {
                displayName: 'Updated After',
                name: 'updated_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter products updated after this date (ISO 8601)',
            },
            {
                displayName: 'Updated Before',
                name: 'updated_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter products updated before this date (ISO 8601)',
            },
            {
                displayName: 'Page',
                name: 'page',
                type: 'number',
                default: 1,
                description: 'Page number',
            },
            {
                displayName: 'Per Page',
                name: 'per_page',
                type: 'number',
                default: 30,
                description: 'Results per page',
            },
            {
                displayName: 'Published',
                name: 'published',
                type: 'boolean',
                default: true,
                description: 'Filter by published status',
            },
            {
                displayName: 'Query',
                name: 'q',
                type: 'string',
                default: '',
                description: 'Search string',
            },
            {
                displayName: 'Category ID',
                name: 'category_id',
                type: 'string',
                default: '',
                description: 'Filter by category ID',
            },
        ],
    },
];
