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
import {AcctgTransEntryResponseType} from '../../accounting/AcctgTransEntry/AcctgTransEntryResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAcctgTransEntry = {
  type: AcctgTransEntryResponseType,
  description: 'mutation for ofbiz createAcctgTransEntry method',
  args:{acctgTransEntryToBeAdded: {type: AcctgTransEntryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/acctgTrans/acctgTransEntrys/add?`, args.acctgTransEntryToBeAdded, req);
  }
};
export {createAcctgTransEntry};


const deleteAcctgTransEntryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTransEntryByIdUpdated method',
  args:{acctgTransEntryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/acctgTrans/acctgTransEntrys/${args.acctgTransEntryId}?`, null, req);
  }
};
export {deleteAcctgTransEntryByIdUpdated};


const updateAcctgTransEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransEntry method',
  args:{acctgTransEntryToBeUpdated: {type: AcctgTransEntryInputType},acctgTransEntrySeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/acctgTrans/acctgTransEntrys/${args.acctgTransEntrySeqId}?`, args.acctgTransEntryToBeUpdated, req);
  }
};
export {updateAcctgTransEntry};
