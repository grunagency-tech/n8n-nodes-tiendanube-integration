import {
    INodeProperties,
} from 'n8n-workflow';

export const cartOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['cart'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                description: 'Get a cart by ID',
                action: 'Get a cart',
            },
            {
                name: 'Remove Coupon',
                value: 'removeCoupon',
                description: 'Remove a coupon from a cart',
                action: 'Remove coupon from cart',
            },
            {
                name: 'Remove Line Item',
                value: 'removeLineItem',
                description: 'Remove a line item from a cart',
                action: 'Remove line item from cart',
            },
        ],
        default: 'get',
    },
];

export const cartFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 cart:get/removeLineItem/removeCoupon       */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Cart ID',
        name: 'cartId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['cart'],
                operation: ['get', 'removeLineItem', 'removeCoupon'],
            },
        },
        description: 'The ID of the cart',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 cart:removeLineItem                        */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Line Item ID',
        name: 'lineItemId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['cart'],
                operation: ['removeLineItem'],
            },
        },
        description: 'The ID of the line item to remove',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 cart:removeCoupon                          */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Coupon ID',
        name: 'couponId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['cart'],
                operation: ['removeCoupon'],
            },
        },
        description: 'The ID of the coupon to remove',
    },
];
