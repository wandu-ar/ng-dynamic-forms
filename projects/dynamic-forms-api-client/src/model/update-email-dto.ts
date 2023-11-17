/**
 * Training plans marketplace - API
 * Aplicacion de venta de rutinas de ejercicios
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UpdateEmailDto { 
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    /**
     * Reference to id field of users documents
     */
    user?: string;
    email?: string;
    errorAt?: string | null;
    errorDetails?: string | null;
    main?: boolean;
    verifiedAt?: string | null;
}
