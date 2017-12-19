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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAcctgTransType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAcctgTransType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/acctgTrans/acctgTransTypes/add?`, null, req);
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
