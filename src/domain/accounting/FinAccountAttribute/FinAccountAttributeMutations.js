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
import {FinAccountAttributeInputType} from '../../accounting/FinAccountAttribute/FinAccountAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFinAccountAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFinAccountAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountAttributes/add?`, null, req);
  }
};
export {createFinAccountAttribute};


const updateFinAccountAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountAttribute method',
  args:{finAccountAttributeToBeUpdated: {type: FinAccountAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountAttributes/${args.attrName}?`, args.finAccountAttributeToBeUpdated, req);
  }
};
export {updateFinAccountAttribute};


const deleteFinAccountAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountAttributeByIdUpdated method',
  args:{finAccountAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountAttributes/${args.finAccountAttributeId}?`, null, req);
  }
};
export {deleteFinAccountAttributeByIdUpdated};
