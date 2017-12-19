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
import {WorkEffortTypeAttrInputType} from '../../workeffort/WorkEffortTypeAttr/WorkEffortTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWorkEffortTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWorkEffortTypeAttr method',
  args:{workEffortTypeAttrToBeAdded: {type: WorkEffortTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortTypeAttrs/add?`, args.workEffortTypeAttrToBeAdded, req);
  }
};
export {createWorkEffortTypeAttr};


const updateWorkEffortTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortTypeAttr method',
  args:{workEffortTypeAttrToBeUpdated: {type: WorkEffortTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortTypeAttrs/${args.attrName}?`, args.workEffortTypeAttrToBeUpdated, req);
  }
};
export {updateWorkEffortTypeAttr};


const deleteWorkEffortTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortTypeAttrByIdUpdated method',
  args:{workEffortTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortTypeAttrs/${args.workEffortTypeAttrId}?`, null, req);
  }
};
export {deleteWorkEffortTypeAttrByIdUpdated};
