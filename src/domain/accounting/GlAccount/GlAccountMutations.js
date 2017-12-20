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
import {GlAccountInputType} from '../../accounting/GlAccount/GlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlAccount method',
  args:{glAccountToBeAdded: {type: GlAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccounts/add?`, args.glAccountToBeAdded, req);
  }
};
export {createGlAccount};


const updateGlAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlAccount method',
  args:{glAccountToBeUpdated: {type: GlAccountInputType},glAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccounts/${args.glAccountId}?`, args.glAccountToBeUpdated, req);
  }
};
export {updateGlAccount};


const deleteGlAccountByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlAccountByIdUpdated method',
  args:{glAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccounts/${args.glAccountId}?`, null, req);
  }
};
export {deleteGlAccountByIdUpdated};
