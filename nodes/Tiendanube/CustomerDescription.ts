import {
    INodeProperties,
} from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: [
                    'customer',
                ],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a customer',
                action: 'Create a customer',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a customer',
                action: 'Delete a customer',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a customer',
                action: 'Get a customer',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all customers',
                action: 'Get all customers',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a customer',
                action: 'Update a customer',
            },
        ],
        default: 'create',
    },
];

export const customerFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 customer:create                            */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: [
                    'customer',
                ],
                operation: [
                    'create',
                    'update',
                ],
            },
        },
        default: '',
        description: 'The name of the customer',
    },
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: [
                    'customer',
                ],
                operation: [
                    'create',
                    'update',
                ],
            },
        },
        default: '',
        description: 'The email of the customer',
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
                    'customer',
                ],
                operation: [
                    'create',
                    'update',
                ],
            },
        },
        options: [
            {
                displayName: 'Identification',
                name: 'identification',
                type: 'string',
                default: '',
                description: 'Document number / ID',
            },
            {
                displayName: 'Phone',
                name: 'phone',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Addresses',
                name: 'addresses',
                type: 'fixedCollection',
                default: {},
                typeOptions: {
                    multipleValues: true,
                },
                options: [
                    {
                        name: 'address',
                        displayName: 'Address',
                        values: [
                            {
                                displayName: 'Address ID',
                                name: 'id',
                                type: 'string',
                                default: '',
                                description: 'ID of the address to update',
                            },
                            {
                                displayName: 'Address',
                                name: 'address',
                                type: 'string',
                                default: '',
                                description: 'Street name',
                            },
                            {
                                displayName: 'Number',
                                name: 'number',
                                type: 'string',
                                default: '',
                                description: 'Street number',
                            },
                            {
                                displayName: 'City',
                                name: 'city',
                                type: 'string',
                                default: '',
                            },
                            {
                                displayName: 'Country',
                                name: 'country',
                                type: 'string',
                                default: '',
                                description: 'ISO 3166-1 alpha-2 code (e.g., AR, BR, US)',
                            },
                            {
                                displayName: 'Province',
                                name: 'province',
                                type: 'string',
                                default: '',
                            },
                            {
                                displayName: 'Zipcode',
                                name: 'zipcode',
                                type: 'string',
                                default: '',
                            },
                            {
                                displayName: 'Phone',
                                name: 'phone',
                                type: 'string',
                                default: '',
                            },
                            {
                                displayName: 'Floor',
                                name: 'floor',
                                type: 'string',
                                default: '',
                            },
                            {
                                displayName: 'Locality',
                                name: 'locality',
                                type: 'string',
                                default: '',
                            },
                            {
                                displayName: 'Default',
                                name: 'default',
                                type: 'boolean',
                                default: false,
                                description: 'Set as default address',
                                displayOptions: {
                                    show: {
                                        '/operation': [
                                            'create',
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                ],
                description: 'Customer addresses. First address becomes the default.',
            },
            {
                displayName: 'Note',
                name: 'note',
                type: 'string',
                default: '',
                description: 'Internal note about the customer',
            },
            {
                displayName: 'Extra Info',
                name: 'extra',
                type: 'fixedCollection',
                default: {},
                typeOptions: {
                    multipleValues: true,
                },
                options: [
                    {
                        name: 'property',
                        displayName: 'Property',
                        values: [
                            {
                                displayName: 'Key',
                                name: 'key',
                                type: 'string',
                                default: '',
                                description: 'Property name (e.g. gender)',
                            },
                            {
                                displayName: 'Value',
                                name: 'value',
                                type: 'string',
                                default: '',
                                description: 'Property value (e.g. male)',
                            },
                        ],
                    },
                ],
                description: 'Custom metadata (e.g., gender, birthdate)',
            },
            {
                displayName: 'Billing Address',
                name: 'billing_address',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Billing City',
                name: 'billing_city',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Billing Country',
                name: 'billing_country',
                type: 'string',
                default: '',
                description: 'ISO 3166-1 alpha-2 code (e.g., US, BR, MX)',
            },
            {
                displayName: 'Billing Number',
                name: 'billing_number',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Billing Phone',
                name: 'billing_phone',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Billing Province',
                name: 'billing_province',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Billing Zipcode',
                name: 'billing_zipcode',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Billing Floor',
                name: 'billing_floor',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Billing Locality',
                name: 'billing_locality',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Send Email Invite',
                name: 'send_email_invite',
                type: 'boolean',
                default: false,
                description: 'Send invitation email to create account',
            },
            {
                displayName: 'Password',
                name: 'password',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                description: 'Set customer account password',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 customer:getAll                            */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: [
                    'customer',
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
                    'customer',
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
            maxValue: 200,
        },
        default: 30,
        description: 'Max number of results to return (API default is 30)',
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
                    'customer',
                ],
                operation: [
                    'getAll',
                ],
            },
        },
        options: [
            {
                displayName: 'Search (q)',
                name: 'q',
                type: 'string',
                default: '',
                description: 'Search across name, email, and identification',
            },
            {
                displayName: 'Created After',
                name: 'created_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter customers created after this date (ISO 8601)',
            },
            {
                displayName: 'Created Before',
                name: 'created_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter customers created before this date (ISO 8601)',
            },
            {
                displayName: 'Updated After',
                name: 'updated_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter customers updated after this date (ISO 8601)',
            },
            {
                displayName: 'Updated Before',
                name: 'updated_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter customers updated before this date (ISO 8601)',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 customer:get/delete                        */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Customer ID',
        name: 'customerId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: [
                    'customer',
                ],
                operation: [
                    'get',
                    'delete',
                    'update',
                ],
            },
        },
        description: 'The ID of the customer',
    },
];
