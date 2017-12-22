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
import {AcctgTransEntryTypeResponseType} from '../../accounting/AcctgTransEntryType/AcctgTransEntryTypeResponseType.js';
import {AcctgTransEntryTypeInputType} from '../../accounting/AcctgTransEntryType/AcctgTransEntryTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAcctgTransEntryType = {
  type: AcctgTransEntryTypeResponseType,
  description: 'mutation for ofbiz createAcctgTransEntryType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/acctgTrans/acctgTransEntryTypes/add?`, null, req);
  }
};
export {createAcctgTransEntryType};


const updateAcctgTransEntryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAcctgTransEntryType method',
  args:{acctgTransEntryTypeToBeUpdated: {type: AcctgTransEntryTypeInputType},acctgTransEntryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/acctgTrans/acctgTransEntryTypes/${args.acctgTransEntryTypeId}?`, args.acctgTransEntryTypeToBeUpdated, req);
  }
};
export {updateAcctgTransEntryType};


const deleteAcctgTransEntryTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAcctgTransEntryTypeByIdUpdated method',
  args:{acctgTransEntryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/acctgTrans/acctgTransEntryTypes/${args.acctgTransEntryTypeId}?`, null, req);
  }
};
export {deleteAcctgTransEntryTypeByIdUpdated};
