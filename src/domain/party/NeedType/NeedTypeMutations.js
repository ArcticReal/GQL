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
import {NeedTypeInputType} from '../../party/NeedType/NeedTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createNeedType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createNeedType method',
  args:{needTypeToBeAdded: {type: NeedTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/needTypes/add?`, args.needTypeToBeAdded, req);
  }
};
export {createNeedType};


const updateNeedType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateNeedType method',
  args:{needTypeToBeUpdated: {type: NeedTypeInputType},needTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/needTypes/${args.needTypeId}?`, args.needTypeToBeUpdated, req);
  }
};
export {updateNeedType};


const deleteNeedTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteNeedTypeByIdUpdated method',
  args:{needTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/needTypes/${args.needTypeId}?`, null, req);
  }
};
export {deleteNeedTypeByIdUpdated};
