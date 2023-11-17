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
import { Tracing } from './tracing';


export interface CreateUserPlanDto { 
    /**
     * Reference to id field of purchase-orders documents
     */
    order: string;
    /**
     * Reference to id field of goals documents
     */
    goal: string;
    /**
     * Reference to id field of plans documents
     */
    plan: string;
    /**
     * Reference to id field of routines documents
     */
    routine: string;
    description: string;
    tracing: Array<Tracing>;
    lastTraining?: string | null;
    /**
     * Reference to id field of users documents
     */
    user: string;
    hidden: boolean;
}

