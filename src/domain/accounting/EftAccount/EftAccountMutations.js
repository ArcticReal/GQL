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
import {EftAccountInputType} from '../../accounting/EftAccount/EftAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEftAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEftAccount method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/eftAccounts/add?`, null, req);
  }
};
export {createEftAccount};


const deleteEftAccountByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEftAccountByIdUpdated method',
  args:{eftAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/eftAccounts/${args.eftAccountId}?`, null, req);
  }
};
export {deleteEftAccountByIdUpdated};


const updateEftAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEftAccount method',
  args:{eftAccountToBeUpdated: {type: EftAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/eftAccounts/${args.nullVal}?`, args.eftAccountToBeUpdated, req);
  }
};
export {updateEftAccount};
