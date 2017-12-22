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
import {GlReconciliationResponseType} from '../../accounting/GlReconciliation/GlReconciliationResponseType.js';
import {GlReconciliationInputType} from '../../accounting/GlReconciliation/GlReconciliationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlReconciliation = {
  type: GlReconciliationResponseType,
  description: 'mutation for ofbiz createGlReconciliation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glReconciliations/add?`, null, req);
  }
};
export {createGlReconciliation};


const updateGlReconciliation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlReconciliation method',
  args:{glReconciliationToBeUpdated: {type: GlReconciliationInputType},glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glReconciliations/${args.glReconciliationId}?`, args.glReconciliationToBeUpdated, req);
  }
};
export {updateGlReconciliation};


const deleteGlReconciliationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlReconciliationByIdUpdated method',
  args:{glReconciliationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glReconciliations/${args.glReconciliationId}?`, null, req);
  }
};
export {deleteGlReconciliationByIdUpdated};
