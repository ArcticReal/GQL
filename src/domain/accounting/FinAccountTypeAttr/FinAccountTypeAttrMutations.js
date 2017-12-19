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
import {FinAccountTypeAttrInputType} from '../../accounting/FinAccountTypeAttr/FinAccountTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFinAccountTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFinAccountTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTypeAttrs/add?`, null, req);
  }
};
export {createFinAccountTypeAttr};


const updateFinAccountTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountTypeAttr method',
  args:{finAccountTypeAttrToBeUpdated: {type: FinAccountTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountTypeAttrs/${args.attrName}?`, args.finAccountTypeAttrToBeUpdated, req);
  }
};
export {updateFinAccountTypeAttr};


const deleteFinAccountTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountTypeAttrByIdUpdated method',
  args:{finAccountTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountTypeAttrs/${args.finAccountTypeAttrId}?`, null, req);
  }
};
export {deleteFinAccountTypeAttrByIdUpdated};
