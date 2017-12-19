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
import {WorkEffortAttributeInputType} from '../../workeffort/WorkEffortAttribute/WorkEffortAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWorkEffortAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkEffortAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortAttributes/add?`, null, req);
  }
};
export {createWorkEffortAttribute};


const updateWorkEffortAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortAttribute method',
  args:{workEffortAttributeToBeUpdated: {type: WorkEffortAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortAttributes/${args.attrName}?`, args.workEffortAttributeToBeUpdated, req);
  }
};
export {updateWorkEffortAttribute};


const deleteWorkEffortAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortAttributeByIdUpdated method',
  args:{workEffortAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortAttributes/${args.workEffortAttributeId}?`, null, req);
  }
};
export {deleteWorkEffortAttributeByIdUpdated};
