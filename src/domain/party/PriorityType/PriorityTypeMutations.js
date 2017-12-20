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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPriorityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPriorityType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/priorityTypes/add?`, null, req);
  }
};
export {createPriorityType};


const updatePriorityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePriorityType method',
  args:{priorityTypeToBeUpdated: {type: PriorityTypeInputType},priorityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/priorityTypes/${args.priorityTypeId}?`, args.priorityTypeToBeUpdated, req);
  }
};
export {updatePriorityType};


const deletePriorityTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePriorityTypeByIdUpdated method',
  args:{priorityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/priorityTypes/${args.priorityTypeId}?`, null, req);
  }
};
export {deletePriorityTypeByIdUpdated};
