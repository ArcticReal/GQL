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
import {AcctgTransEntryInputType} from '../../accounting/AcctgTransEntry/AcctgTransEntryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAcctgTransEntry = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAcctgTransEntry method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/acctgTrans/acctgTransEntrys/add?`, null, req);
  }
};
export {createAcctgTransEntry};


const deleteAcctgTransEntryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAcctgTransEntryByIdUpdated method',
  args:{acctgTransEntryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/acctgTrans/acctgTransEntrys/${args.acctgTransEntryId}?`, null, req);
  }
};
export {deleteAcctgTransEntryByIdUpdated};


const updateAcctgTransEntry = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAcctgTransEntry method',
  args:{acctgTransEntryToBeUpdated: {type: AcctgTransEntryInputType},acctgTransEntrySeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/acctgTrans/acctgTransEntrys/${args.acctgTransEntrySeqId}?`, args.acctgTransEntryToBeUpdated, req);
  }
};
export {updateAcctgTransEntry};
