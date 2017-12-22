import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {EmplPositionFulfillmentInputType} from '../../humanres/EmplPositionFulfillment/EmplPositionFulfillmentInputType.js';
import {EmplPositionFulfillmentResponseType} from '../../humanres/EmplPositionFulfillment/EmplPositionFulfillmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmplPositionFulfillment = {
  type: EmplPositionFulfillmentResponseType,
  description: 'mutation for ofbiz createEmplPositionFulfillment method',
  args:{emplPositionFulfillmentToBeAdded: {type: EmplPositionFulfillmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionFulfillments/add?`, args.emplPositionFulfillmentToBeAdded, req);
  }
};
export {createEmplPositionFulfillment};


const deleteEmplPositionFulfillmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplPositionFulfillmentByIdUpdated method',
  args:{emplPositionFulfillmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionFulfillments/${args.emplPositionFulfillmentId}?`, null, req);
  }
};
export {deleteEmplPositionFulfillmentByIdUpdated};


const updateEmplPositionFulfillment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplPositionFulfillment method',
  args:{emplPositionFulfillmentToBeUpdated: {type: EmplPositionFulfillmentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionFulfillments/${args.nullVal}?`, args.emplPositionFulfillmentToBeUpdated, req);
  }
};
export {updateEmplPositionFulfillment};
