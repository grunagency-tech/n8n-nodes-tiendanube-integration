import {
    INodeProperties,
} from 'n8n-workflow';

export const couponOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'coupon',
                ],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a coupon',
                action: 'Create a coupon',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a coupon',
                action: 'Delete a coupon',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a coupon',
                action: 'Get a coupon',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all coupons',
                action: 'Get all coupons',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a coupon',
                action: 'Update a coupon',
            },
        ],
        default: 'create',
    },
];

export const couponFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 coupon:create                              */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Code',
        name: 'code',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: [
                    'coupon',
                ],
                operation: [
                    'create',
                ],
            },
        },
        default: '',
        description: 'Coupon code (e.g., SUMMER2026)',
    },
    {
        displayName: 'Type',
        name: 'type',
        type: 'options',
        required: true,
        options: [
            {
                name: 'Percentage',
                value: 'percentage',
            },
            {
                name: 'Absolute (Fixed Amount)',
                value: 'absolute',
            },
            {
                name: 'Free Shipping',
                value: 'shipping',
            },
        ],
        default: 'percentage',
        displayOptions: {
            show: {
                resource: [
                    'coupon',
                ],
                operation: [
                    'create',
                ],
            },
        },
        description: 'Type of discount',
    },
    {
        displayName: 'Value',
        name: 'value',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'coupon',
                ],
                operation: [
                    'create',
                ],
            },
        },
        description: 'Discount value (percentage: 0-100, absolute: fixed amount)',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: [
                    'coupon',
                ],
                operation: [
                    'create',
                    'update',
                ],
            },
        },
        options: [
            {
                displayName: 'Max Uses',
                name: 'max_uses',
                type: 'number',
                default: null,
                description: 'Maximum number of times this coupon can be used (null = unlimited)',
            },
            {
                displayName: 'Start Date',
                name: 'start_date',
                type: 'dateTime',
                default: '',
                description: 'When the coupon becomes valid (ISO 8601)',
            },
            {
                displayName: 'End Date',
                name: 'end_date',
                type: 'dateTime',
                default: '',
                description: 'When the coupon expires (ISO 8601)',
            },
            {
                displayName: 'Minimum Price',
                name: 'min_price',
                type: 'number',
                default: 0,
                description: 'Minimum purchase amount to use coupon',
            },
            {
                displayName: 'Includes Shipping',
                name: 'includes_shipping',
                type: 'boolean',
                default: false,
                description: 'Whether to apply discount to shipping cost',
            },
            {
                displayName: 'First Consumer Purchase Only',
                name: 'first_consumer_purchase',
                type: 'boolean',
                default: false,
                description: 'Whether coupon is only valid for first-time customers',
            },
            {
                displayName: 'Combines With Other Discounts',
                name: 'combines_with_other_discounts',
                type: 'boolean',
                default: true,
                description: 'Whether coupon can be combined with other promotions',
            },
            {
                displayName: 'Only Cheapest Shipping',
                name: 'only_cheapest_shipping',
                type: 'boolean',
                default: false,
                description: 'Whether to only apply to cheapest shipping option',
            },
            {
                displayName: 'Categories',
                name: 'categories',
                type: 'fixedCollection',
                placeholder: 'Add Category',
                default: {},
                typeOptions: {
                    multipleValues: true,
                },
                options: [
                    {
                        name: 'category',
                        displayName: 'Category',
                        values: [
                            {
                                displayName: 'Category ID',
                                name: 'id',
                                type: 'string',
                                default: '',
                            },
                        ],
                    },
                ],
                description: 'Categories to restrict coupon to',
            },
            {
                displayName: 'Products',
                name: 'products',
                type: 'fixedCollection',
                placeholder: 'Add Product',
                default: {},
                typeOptions: {
                    multipleValues: true,
                },
                options: [
                    {
                        name: 'product',
                        displayName: 'Product',
                        values: [
                            {
                                displayName: 'Product ID',
                                name: 'id',
                                type: 'string',
                                default: '',
                            },
                        ],
                    },
                ],
                description: 'Products to restrict coupon to',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 coupon:get/delete                          */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Coupon ID',
        name: 'couponId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'coupon',
                ],
                operation: [
                    'get',
                    'delete',
                    'update',
                ],
            },
        },
        description: 'The ID of the coupon',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 coupon:getAll                              */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: [
                    'coupon',
                ],
                operation: [
                    'getAll',
                ],
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
                resource: [
                    'coupon',
                ],
                operation: [
                    'getAll',
                ],
                returnAll: [
                    false,
                ],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 500,
        },
        default: 50,
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
                resource: [
                    'coupon',
                ],
                operation: [
                    'getAll',
                ],
            },
        },
        options: [
            {
                displayName: 'Search',
                name: 'q',
                type: 'string',
                default: '',
                description: 'Search coupons by code',
            },
            {
                displayName: 'Valid Only',
                name: 'valid',
                type: 'boolean',
                default: true,
                description: 'Filter by validity status',
            },
            {
                displayName: 'Status',
                name: 'status',
                type: 'options',
                options: [
                    { name: 'Activated', value: 'activated' },
                    { name: 'Deactivated', value: 'deactivated' },
                ],
                default: 'activated',
                description: 'Filter by status',
            },
            {
                displayName: 'Discount Type',
                name: 'discount_type',
                type: 'options',
                options: [
                    { name: 'Percentage', value: 'percentage' },
                    { name: 'Absolute', value: 'absolute' },
                    { name: 'Shipping', value: 'shipping' },
                ],
                default: 'percentage',
                description: 'Filter by discount type',
            },
            {
                displayName: 'Limitation Type',
                name: 'limitation_type',
                type: 'options',
                options: [
                    { name: 'Quantity', value: 'quantity' },
                    { name: 'Cart Value', value: 'cart_value' },
                    { name: 'Categories', value: 'categories' },
                ],
                default: 'quantity',
                description: 'Filter by limitation type',
            },
            {
                displayName: 'Term Type',
                name: 'term_type',
                type: 'options',
                options: [
                    { name: 'Unlimited', value: 'unlimited' },
                    { name: 'Limited', value: 'limited' },
                ],
                default: 'unlimited',
                description: 'Filter by term type',
            },
            {
                displayName: 'Includes Shipping',
                name: 'includes_shipping',
                type: 'boolean',
                default: false,
                description: 'Filter if coupon applies to shipping',
            },
            {
                displayName: 'Min Start Date',
                name: 'min_start_date',
                type: 'dateTime',
                default: '',
                description: 'Filter by minimum start date',
            },
            {
                displayName: 'Max Start Date',
                name: 'max_start_date',
                type: 'dateTime',
                default: '',
                description: 'Filter by maximum start date',
            },
            {
                displayName: 'Min End Date',
                name: 'min_end_date',
                type: 'dateTime',
                default: '',
                description: 'Filter by minimum end date',
            },
            {
                displayName: 'Max End Date',
                name: 'max_end_date',
                type: 'dateTime',
                default: '',
                description: 'Filter by maximum end date',
            },
            {
                displayName: 'Created After',
                name: 'created_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter coupons created after this date (ISO 8601)',
            },
            {
                displayName: 'Created Before',
                name: 'created_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter coupons created before this date (ISO 8601)',
            },
            {
                displayName: 'Updated After',
                name: 'updated_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter coupons updated after this date (ISO 8601)',
            },
            {
                displayName: 'Updated Before',
                name: 'updated_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter coupons updated before this date (ISO 8601)',
            },
            {
                displayName: 'Sort By',
                name: 'sort_by',
                type: 'options',
                options: [
                    { name: 'Created At (Ascending)', value: 'created-at-ascending' },
                    { name: 'Created At (Descending)', value: 'created-at-descending' },
                    { name: 'Code (Ascending)', value: 'alpha-ascending' },
                    { name: 'Code (Descending)', value: 'alpha-descending' },
                    { name: 'Uses (Ascending)', value: 'uses-ascending' },
                    { name: 'Uses (Descending)', value: 'uses-descending' },
                ],
                default: 'created-at-descending',
                description: 'Sort results',
            },
        ],
    },
];
