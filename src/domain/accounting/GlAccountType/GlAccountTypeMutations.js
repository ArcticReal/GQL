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
import {GlAccountTypeInputType} from '../../accounting/GlAccountType/GlAccountTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlAccountType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountType method',
  args:{glAccountTypeToBeAdded: {type: GlAccountTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountTypes/add?`, args.glAccountTypeToBeAdded, req);
  }
};
export {createGlAccountType};


const updateGlAccountType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountType method',
  args:{glAccountTypeToBeUpdated: {type: GlAccountTypeInputType},glAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountTypes/${args.glAccountTypeId}?`, args.glAccountTypeToBeUpdated, req);
  }
};
export {updateGlAccountType};


const deleteGlAccountTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountTypeByIdUpdated method',
  args:{glAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountTypes/${args.glAccountTypeId}?`, null, req);
  }
};
export {deleteGlAccountTypeByIdUpdated};
