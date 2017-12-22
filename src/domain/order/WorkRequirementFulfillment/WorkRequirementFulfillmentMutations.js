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
import {WorkRequirementFulfillmentInputType} from '../../order/WorkRequirementFulfillment/WorkRequirementFulfillmentInputType.js';
import {WorkRequirementFulfillmentResponseType} from '../../order/WorkRequirementFulfillment/WorkRequirementFulfillmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkRequirementFulfillment = {
  type: WorkRequirementFulfillmentResponseType,
  description: 'mutation for ofbiz createWorkRequirementFulfillment method',
  args:{workRequirementFulfillmentToBeAdded: {type: WorkRequirementFulfillmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/workRequirementFulfillments/add?`, args.workRequirementFulfillmentToBeAdded, req);
  }
};
export {createWorkRequirementFulfillment};


const updateWorkRequirementFulfillment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkRequirementFulfillment method',
  args:{workRequirementFulfillmentToBeUpdated: {type: WorkRequirementFulfillmentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/workRequirementFulfillments/${args.nullVal}?`, args.workRequirementFulfillmentToBeUpdated, req);
  }
};
export {updateWorkRequirementFulfillment};


const deleteWorkRequirementFulfillmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkRequirementFulfillmentByIdUpdated method',
  args:{workRequirementFulfillmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/workRequirementFulfillments/${args.workRequirementFulfillmentId}?`, null, req);
  }
};
export {deleteWorkRequirementFulfillmentByIdUpdated};
