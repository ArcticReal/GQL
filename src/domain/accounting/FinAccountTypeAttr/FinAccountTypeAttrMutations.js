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
import {FinAccountTypeAttrResponseType} from '../../accounting/FinAccountTypeAttr/FinAccountTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountTypeAttr = {
  type: FinAccountTypeAttrResponseType,
  description: 'mutation for ofbiz createFinAccountTypeAttr method',
  args:{finAccountTypeAttrToBeAdded: {type: FinAccountTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTypeAttrs/add?`, args.finAccountTypeAttrToBeAdded, req);
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
