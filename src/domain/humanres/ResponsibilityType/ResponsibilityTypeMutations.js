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
import {ResponsibilityTypeInputType} from '../../humanres/ResponsibilityType/ResponsibilityTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createResponsibilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createResponsibilityType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/responsibilityTypes/add?`, null, req);
  }
};
export {createResponsibilityType};


const updateResponsibilityType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateResponsibilityType method',
  args:{responsibilityTypeToBeUpdated: {type: ResponsibilityTypeInputType},responsibilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/responsibilityTypes/${args.responsibilityTypeId}?`, args.responsibilityTypeToBeUpdated, req);
  }
};
export {updateResponsibilityType};


const deleteResponsibilityTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteResponsibilityTypeByIdUpdated method',
  args:{responsibilityTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/responsibilityTypes/${args.responsibilityTypeId}?`, null, req);
  }
};
export {deleteResponsibilityTypeByIdUpdated};
