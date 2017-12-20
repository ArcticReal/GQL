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
import {AcctgTransInputType} from '../../accounting/AcctgTrans/AcctgTransInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAcctgTrans = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAcctgTrans method',
  args:{acctgTransToBeAdded: {type: AcctgTransInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/acctgTranss/add?`, args.acctgTransToBeAdded, req);
  }
};
export {createAcctgTrans};


const updateAcctgTrans = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAcctgTrans method',
  args:{acctgTransToBeUpdated: {type: AcctgTransInputType},acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/acctgTranss/${args.acctgTransId}?`, args.acctgTransToBeUpdated, req);
  }
};
export {updateAcctgTrans};


const deleteAcctgTransByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAcctgTransByIdUpdated method',
  args:{acctgTransId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/acctgTranss/${args.acctgTransId}?`, null, req);
  }
};
export {deleteAcctgTransByIdUpdated};
