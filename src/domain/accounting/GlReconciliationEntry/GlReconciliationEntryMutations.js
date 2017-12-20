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
import {GlReconciliationEntryInputType} from '../../accounting/GlReconciliationEntry/GlReconciliationEntryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlReconciliationEntry = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlReconciliationEntry method',
  args:{glReconciliationEntryToBeAdded: {type: GlReconciliationEntryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glReconciliation/glReconciliationEntrys/add?`, args.glReconciliationEntryToBeAdded, req);
  }
};
export {createGlReconciliationEntry};


const updateGlReconciliationEntry = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlReconciliationEntry method',
  args:{glReconciliationEntryToBeUpdated: {type: GlReconciliationEntryInputType},acctgTransEntrySeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glReconciliation/glReconciliationEntrys/${args.acctgTransEntrySeqId}?`, args.glReconciliationEntryToBeUpdated, req);
  }
};
export {updateGlReconciliationEntry};


const deleteGlReconciliationEntryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlReconciliationEntryByIdUpdated method',
  args:{glReconciliationEntryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glReconciliation/glReconciliationEntrys/${args.glReconciliationEntryId}?`, null, req);
  }
};
export {deleteGlReconciliationEntryByIdUpdated};
