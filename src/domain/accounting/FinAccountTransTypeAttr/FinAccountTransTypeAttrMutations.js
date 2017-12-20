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
import {FinAccountTransTypeAttrInputType} from '../../accounting/FinAccountTransTypeAttr/FinAccountTransTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountTransTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFinAccountTransTypeAttr method',
  args:{finAccountTransTypeAttrToBeAdded: {type: FinAccountTransTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTransTypeAttrs/add?`, args.finAccountTransTypeAttrToBeAdded, req);
  }
};
export {createFinAccountTransTypeAttr};


const updateFinAccountTransTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFinAccountTransTypeAttr method',
  args:{finAccountTransTypeAttrToBeUpdated: {type: FinAccountTransTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountTransTypeAttrs/${args.attrName}?`, args.finAccountTransTypeAttrToBeUpdated, req);
  }
};
export {updateFinAccountTransTypeAttr};


const deleteFinAccountTransTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFinAccountTransTypeAttrByIdUpdated method',
  args:{finAccountTransTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountTransTypeAttrs/${args.finAccountTransTypeAttrId}?`, null, req);
  }
};
export {deleteFinAccountTransTypeAttrByIdUpdated};
