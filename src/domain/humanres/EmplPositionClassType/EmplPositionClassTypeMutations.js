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
import {EmplPositionClassTypeInputType} from '../../humanres/EmplPositionClassType/EmplPositionClassTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createEmplPositionClassType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEmplPositionClassType method',
  args:{emplPositionClassTypeToBeAdded: {type: EmplPositionClassTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionClassTypes/add?`, args.emplPositionClassTypeToBeAdded, req);
  }
};
export {createEmplPositionClassType};


const updateEmplPositionClassType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplPositionClassType method',
  args:{emplPositionClassTypeToBeUpdated: {type: EmplPositionClassTypeInputType},emplPositionClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionClassTypes/${args.emplPositionClassTypeId}?`, args.emplPositionClassTypeToBeUpdated, req);
  }
};
export {updateEmplPositionClassType};


const deleteEmplPositionClassTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplPositionClassTypeByIdUpdated method',
  args:{emplPositionClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionClassTypes/${args.emplPositionClassTypeId}?`, null, req);
  }
};
export {deleteEmplPositionClassTypeByIdUpdated};
