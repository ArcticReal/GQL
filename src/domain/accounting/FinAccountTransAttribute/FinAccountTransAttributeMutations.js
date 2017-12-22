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
import {FinAccountTransAttributeResponseType} from '../../accounting/FinAccountTransAttribute/FinAccountTransAttributeResponseType.js';
import {FinAccountTransAttributeInputType} from '../../accounting/FinAccountTransAttribute/FinAccountTransAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountTransAttribute = {
  type: FinAccountTransAttributeResponseType,
  description: 'mutation for ofbiz createFinAccountTransAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTransAttributes/add?`, null, req);
  }
};
export {createFinAccountTransAttribute};


const updateFinAccountTransAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountTransAttribute method',
  args:{finAccountTransAttributeToBeUpdated: {type: FinAccountTransAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountTransAttributes/${args.attrName}?`, args.finAccountTransAttributeToBeUpdated, req);
  }
};
export {updateFinAccountTransAttribute};


const deleteFinAccountTransAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountTransAttributeByIdUpdated method',
  args:{finAccountTransAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountTransAttributes/${args.finAccountTransAttributeId}?`, null, req);
  }
};
export {deleteFinAccountTransAttributeByIdUpdated};
