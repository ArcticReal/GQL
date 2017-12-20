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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmplPositionClassType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmplPositionClassType method',
  args:{emplPositionClassTypeToBeAdded: {type: EmplPositionClassTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplPosition/emplPositionClassTypes/add?`, args.emplPositionClassTypeToBeAdded, req);
  }
};
export {createEmplPositionClassType};


const updateEmplPositionClassType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmplPositionClassType method',
  args:{emplPositionClassTypeToBeUpdated: {type: EmplPositionClassTypeInputType},emplPositionClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplPosition/emplPositionClassTypes/${args.emplPositionClassTypeId}?`, args.emplPositionClassTypeToBeUpdated, req);
  }
};
export {updateEmplPositionClassType};


const deleteEmplPositionClassTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmplPositionClassTypeByIdUpdated method',
  args:{emplPositionClassTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplPosition/emplPositionClassTypes/${args.emplPositionClassTypeId}?`, null, req);
  }
};
export {deleteEmplPositionClassTypeByIdUpdated};
