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
import {GlReconciliationEntryResponseType} from '../../accounting/GlReconciliationEntry/GlReconciliationEntryResponseType.js';
import {GlReconciliationEntryInputType} from '../../accounting/GlReconciliationEntry/GlReconciliationEntryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlReconciliationEntry = {
  type: GlReconciliationEntryResponseType,
  description: 'mutation for ofbiz createGlReconciliationEntry method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glReconciliation/glReconciliationEntrys/add?`, null, req);
  }
};
export {createGlReconciliationEntry};


const updateGlReconciliationEntry = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlReconciliationEntry method',
  args:{glReconciliationEntryToBeUpdated: {type: GlReconciliationEntryInputType},acctgTransEntrySeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glReconciliation/glReconciliationEntrys/${args.acctgTransEntrySeqId}?`, args.glReconciliationEntryToBeUpdated, req);
  }
};
export {updateGlReconciliationEntry};


const deleteGlReconciliationEntryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlReconciliationEntryByIdUpdated method',
  args:{glReconciliationEntryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glReconciliation/glReconciliationEntrys/${args.glReconciliationEntryId}?`, null, req);
  }
};
export {deleteGlReconciliationEntryByIdUpdated};
