import {
    INodeProperties,
} from 'n8n-workflow';

export const pageOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['page'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new page',
                action: 'Create a page',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a page',
                action: 'Delete a page',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a page',
                action: 'Get a page',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all pages',
                action: 'Get all pages',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a page',
                action: 'Update a page',
            },
        ],
        default: 'getAll',
    },
];

export const pageFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 page:get/update/delete                     */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Page ID',
        name: 'pageId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['page'],
                operation: ['get', 'update', 'delete'],
            },
        },
        description: 'The ID of the page',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 page:create                                */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Language',
        name: 'language',
        type: 'options',
        options: [
            { name: 'Spanish', value: 'es' },
            { name: 'English', value: 'en' },
            { name: 'Portuguese', value: 'pt' },
        ],
        default: 'es',
        required: true,
        displayOptions: {
            show: {
                resource: ['page'],
                operation: ['create'],
            },
        },
        description: 'Language for the page content',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 page:create/update                         */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['page'],
                operation: ['create', 'update'],
            },
        },
        description: 'Page title',
    },
    {
        displayName: 'Content (HTML)',
        name: 'content',
        type: 'string',
        typeOptions: {
            rows: 5,
        },
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['page'],
                operation: ['create', 'update'],
            },
        },
        description: 'Page content in HTML format',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['page'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                displayName: 'Published',
                name: 'published',
                type: 'boolean',
                default: true,
                description: 'Whether the page is published',
            },
            {
                displayName: 'SEO Handle',
                name: 'seo_handle',
                type: 'string',
                default: '',
                description: 'URL-friendly handle',
            },
            {
                displayName: 'SEO Title',
                name: 'seo_title',
                type: 'string',
                default: '',
                description: 'SEO title',
            },
            {
                displayName: 'SEO Description',
                name: 'seo_description',
                type: 'string',
                default: '',
                description: 'SEO description',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 page:getAll                                */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['page'],
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
                resource: ['page'],
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
                resource: ['page'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Since ID',
                name: 'since_id',
                type: 'string',
                default: '',
                description: 'Return pages created after this ID',
            },
            {
                displayName: 'Created After',
                name: 'created_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter pages created after this date (ISO 8601)',
            },
            {
                displayName: 'Created Before',
                name: 'created_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter pages created before this date (ISO 8601)',
            },
            {
                displayName: 'Updated After',
                name: 'updated_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter pages updated after this date (ISO 8601)',
            },
            {
                displayName: 'Updated Before',
                name: 'updated_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter pages updated before this date (ISO 8601)',
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
