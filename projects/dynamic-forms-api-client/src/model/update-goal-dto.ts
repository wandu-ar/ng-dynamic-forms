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


export interface UpdateGoalDto { 
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    name?: string;
    description?: string;
    image?: string | null;
    /**
     * Reference to id field of plans documents
     */
    plans?: Array<string>;
}
