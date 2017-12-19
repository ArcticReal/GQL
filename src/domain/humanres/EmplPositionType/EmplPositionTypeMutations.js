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
import {EmplPositionTypeInputType} from '../../humanres/EmplPositionType/EmplPositionTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createEmplPositionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEmplPositionType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionTypes/add?`, null, req);
  }
};
export {createEmplPositionType};


const updateEmplPositionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplPositionType method',
  args:{emplPositionTypeToBeUpdated: {type: EmplPositionTypeInputType},emplPositionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionTypes/${args.emplPositionTypeId}?`, args.emplPositionTypeToBeUpdated, req);
  }
};
export {updateEmplPositionType};


const deleteEmplPositionTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplPositionTypeByIdUpdated method',
  args:{emplPositionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionTypes/${args.emplPositionTypeId}?`, null, req);
  }
};
export {deleteEmplPositionTypeByIdUpdated};
