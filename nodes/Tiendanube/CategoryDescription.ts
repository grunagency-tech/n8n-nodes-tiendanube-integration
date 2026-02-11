import {
    INodeProperties,
} from 'n8n-workflow';

export const categoryOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['category'],
            },
        },
        options: [
            {
                name: 'Create',
                value: 'create',
                description: 'Create a new category',
                action: 'Create a category',
            },
            {
                name: 'Delete',
                value: 'delete',
                description: 'Delete a category',
                action: 'Delete a category',
            },
            {
                name: 'Get',
                value: 'get',
                description: 'Get a category',
                action: 'Get a category',
            },
            {
                name: 'Get All',
                value: 'getAll',
                description: 'Get all categories',
                action: 'Get all categories',
            },
            {
                name: 'Update',
                value: 'update',
                description: 'Update a category',
                action: 'Update a category',
            },
        ],
        default: 'getAll',
    },
];

export const categoryFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 category:get/update/delete                 */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Category ID',
        name: 'categoryId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['category'],
                operation: ['get', 'update', 'delete'],
            },
        },
        description: 'The ID of the category',
    },
    /* -------------------------------------------------------------------------- */
    /*                                 category:create                            */
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
                resource: ['category'],
                operation: ['create'],
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
        description: 'Category name in different languages',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['category'],
                operation: ['create', 'update'],
            },
        },
        options: [
            {
                displayName: 'Name (Multilanguage)',
                name: 'name',
                type: 'fixedCollection',
                typeOptions: {
                    multipleValues: true,
                },
                default: {},
                description: 'Category name (for update)',
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
                displayName: 'Description (Multilanguage)',
                name: 'description',
                type: 'fixedCollection',
                typeOptions: {
                    multipleValues: true,
                },
                default: {},
                description: 'Category description',
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
                displayName: 'Handle (Multilanguage)',
                name: 'handle',
                type: 'fixedCollection',
                typeOptions: {
                    multipleValues: true,
                },
                default: {},
                description: 'URL-friendly slug for each language',
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
                displayName: 'Parent ID',
                name: 'parent',
                type: 'number',
                default: 0,
                description: 'ID of the parent category (0 or null for root category)',
            },
            {
                displayName: 'Google Shopping Category',
                name: 'google_shopping_category',
                type: 'string',
                default: '',
                description: 'Google Shopping product category (e.g., "Clothing & Accessories > Jewelry")',
            },
        ],
    },
    /* -------------------------------------------------------------------------- */
    /*                                 category:getAll                            */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['category'],
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
                resource: ['category'],
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
                resource: ['category'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Since ID',
                name: 'since_id',
                type: 'string',
                default: '',
                description: 'Return categories created after this ID',
            },
            {
                displayName: 'Page',
                name: 'page',
                type: 'number',
                typeOptions: {
                    minValue: 1,
                },
                default: 1,
                description: 'Page number to retrieve',
            },
            {
                displayName: 'Parent ID',
                name: 'parent_id',
                type: 'number',
                default: '',
                description: 'Filter by parent category ID',
            },
            {
                displayName: 'Created After',
                name: 'created_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter categories created after this date (ISO 8601)',
            },
            {
                displayName: 'Created Before',
                name: 'created_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter categories created before this date (ISO 8601)',
            },
            {
                displayName: 'Updated After',
                name: 'updated_at_min',
                type: 'dateTime',
                default: '',
                description: 'Filter categories updated after this date (ISO 8601)',
            },
            {
                displayName: 'Updated Before',
                name: 'updated_at_max',
                type: 'dateTime',
                default: '',
                description: 'Filter categories updated before this date (ISO 8601)',
            },
            {
                displayName: 'Handle',
                name: 'handle',
                type: 'string',
                default: '',
                description: 'Filter by handle/slug (requires Language)',
            },
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
                description: 'Language for handle filter',
            },
            {
                displayName: 'Fields',
                name: 'fields',
                type: 'string',
                default: '',
                description: 'Comma-separated list of fields to return (e.g., id,name,subcategories)',
            },
        ],
    },
];
