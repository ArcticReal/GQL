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
import {AcctgTransAttributeInputType} from '../../accounting/AcctgTransAttribute/AcctgTransAttributeInputType.js';
import {AcctgTransAttributeResponseType} from '../../accounting/AcctgTransAttribute/AcctgTransAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAcctgTransAttribute = {
  type: AcctgTransAttributeResponseType,
  description: 'mutation for ofbiz createAcctgTransAttribute method',
  args:{acctgTransAttributeToBeAdded: {type: AcctgTransAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/acctgTrans/acctgTransAttributes/add?`, args.acctgTransAttributeToBeAdded, req);
  }
};
export {createAcctgTransAttribute};


const deleteAcctgTransAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTransAttributeByIdUpdated method',
  args:{acctgTransAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/acctgTrans/acctgTransAttributes/${args.acctgTransAttributeId}?`, null, req);
  }
};
export {deleteAcctgTransAttributeByIdUpdated};


const updateAcctgTransAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransAttribute method',
  args:{acctgTransAttributeToBeUpdated: {type: AcctgTransAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/acctgTrans/acctgTransAttributes/${args.attrName}?`, args.acctgTransAttributeToBeUpdated, req);
  }
};
export {updateAcctgTransAttribute};
