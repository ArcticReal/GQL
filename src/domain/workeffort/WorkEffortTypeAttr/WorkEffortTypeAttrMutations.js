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
import {WorkEffortTypeAttrResponseType} from '../../workeffort/WorkEffortTypeAttr/WorkEffortTypeAttrResponseType.js';
import {WorkEffortTypeAttrInputType} from '../../workeffort/WorkEffortTypeAttr/WorkEffortTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortTypeAttr = {
  type: WorkEffortTypeAttrResponseType,
  description: 'mutation for ofbiz createWorkEffortTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortTypeAttrs/add?`, null, req);
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
