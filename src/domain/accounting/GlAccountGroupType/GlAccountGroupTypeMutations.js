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
import {GlAccountGroupTypeInputType} from '../../accounting/GlAccountGroupType/GlAccountGroupTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlAccountGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlAccountGroupType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountGroupTypes/add?`, null, req);
  }
};
export {createGlAccountGroupType};


const updateGlAccountGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlAccountGroupType method',
  args:{glAccountGroupTypeToBeUpdated: {type: GlAccountGroupTypeInputType},glAccountGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountGroupTypes/${args.glAccountGroupTypeId}?`, args.glAccountGroupTypeToBeUpdated, req);
  }
};
export {updateGlAccountGroupType};


const deleteGlAccountGroupTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlAccountGroupTypeByIdUpdated method',
  args:{glAccountGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountGroupTypes/${args.glAccountGroupTypeId}?`, null, req);
  }
};
export {deleteGlAccountGroupTypeByIdUpdated};
