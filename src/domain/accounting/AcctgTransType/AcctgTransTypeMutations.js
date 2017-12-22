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
import {AcctgTransTypeInputType} from '../../accounting/AcctgTransType/AcctgTransTypeInputType.js';
import {AcctgTransTypeResponseType} from '../../accounting/AcctgTransType/AcctgTransTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAcctgTransType = {
  type: AcctgTransTypeResponseType,
  description: 'mutation for ofbiz createAcctgTransType method',
  args:{acctgTransTypeToBeAdded: {type: AcctgTransTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/acctgTrans/acctgTransTypes/add?`, args.acctgTransTypeToBeAdded, req);
  }
};
export {createAcctgTransType};


const updateAcctgTransType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransType method',
  args:{acctgTransTypeToBeUpdated: {type: AcctgTransTypeInputType},acctgTransTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/acctgTrans/acctgTransTypes/${args.acctgTransTypeId}?`, args.acctgTransTypeToBeUpdated, req);
  }
};
export {updateAcctgTransType};


const deleteAcctgTransTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTransTypeByIdUpdated method',
  args:{acctgTransTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/acctgTrans/acctgTransTypes/${args.acctgTransTypeId}?`, null, req);
  }
};
export {deleteAcctgTransTypeByIdUpdated};
