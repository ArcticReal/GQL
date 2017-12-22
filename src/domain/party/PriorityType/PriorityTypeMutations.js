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
import {PriorityTypeInputType} from '../../party/PriorityType/PriorityTypeInputType.js';
import {PriorityTypeResponseType} from '../../party/PriorityType/PriorityTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPriorityType = {
  type: PriorityTypeResponseType,
  description: 'mutation for ofbiz createPriorityType method',
  args:{priorityTypeToBeAdded: {type: PriorityTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/priorityTypes/add?`, args.priorityTypeToBeAdded, req);
  }
};
export {createPriorityType};


const updatePriorityType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePriorityType method',
  args:{priorityTypeToBeUpdated: {type: PriorityTypeInputType},priorityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/priorityTypes/${args.priorityTypeId}?`, args.priorityTypeToBeUpdated, req);
  }
};
export {updatePriorityType};


const deletePriorityTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePriorityTypeByIdUpdated method',
  args:{priorityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/priorityTypes/${args.priorityTypeId}?`, null, req);
  }
};
export {deletePriorityTypeByIdUpdated};
