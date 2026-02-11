import {
    INodeProperties,
} from 'n8n-workflow';

export const abandonedCheckoutOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['abandonedCheckout'],
            },
        },
        options: [
            {
                name: 'Apply Coupon',
                value: 'applyCoupon',
                description: 'Apply a discount coupon to an abandoned checkout',
                action: 'Apply coupon to abandoned checkout',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get an abandoned checkout',
                action: 'Get an abandoned checkout',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all abandoned checkouts',
                action: 'Get all abandoned checkouts',
            },
        ],
        default: 'getAll',
    },
];

export const abandonedCheckoutFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 abandonedCheckout:get                      */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Checkout ID',
        name: 'checkoutId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['abandonedCheckout'],
                operation: ['get'],
            },
        },
        description: 'The ID of the abandoned checkout',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 abandonedCheckout:applyCoupon              */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Checkout ID',
        name: 'checkoutId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['abandonedCheckout'],
                operation: ['applyCoupon'],
            },
        },
        description: 'The ID of the abandoned checkout/cart to apply the coupon to',
    },
    {
        displayName: 'Coupon ID',
        name: 'couponId',
        type: 'number',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['abandonedCheckout'],
                operation: ['applyCoupon'],
            },
        },
        description: 'The numeric ID of the coupon to apply',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 abandonedCheckout:getAll                   */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['abandonedCheckout'],
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
                resource: ['abandonedCheckout'],
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
                resource: ['abandonedCheckout'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Since ID',
                name: 'since_id',
                type: 'string',
                default: '',
                description: 'Return checkouts created after this ID',
            },
            {
                displayName: 'Created After',
                name: 'created_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter checkouts created after this date (ISO 8601)',
            },
            {
                displayName: 'Created Before',
                name: 'created_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter checkouts created before this date (ISO 8601)',
            },
            {
                displayName: 'Updated After',
                name: 'updated_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter checkouts updated after this date (ISO 8601)',
            },
            {
                displayName: 'Updated Before',
                name: 'updated_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter checkouts updated before this date (ISO 8601)',
            },
            {
                displayName: 'Page',
                name: 'page',
                type: 'number',
                default: 1,
                description: 'Page number for pagination',
            },
            {
                displayName: 'Per Page',
                name: 'per_page',
                type: 'number',
                default: 30,
                description: 'Number of results per page (max 200)',
            },
        ],
    },
];
