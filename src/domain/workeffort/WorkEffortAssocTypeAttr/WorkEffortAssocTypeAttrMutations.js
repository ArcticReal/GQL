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
import {WorkEffortAssocTypeAttrResponseType} from '../../workeffort/WorkEffortAssocTypeAttr/WorkEffortAssocTypeAttrResponseType.js';
import {WorkEffortAssocTypeAttrInputType} from '../../workeffort/WorkEffortAssocTypeAttr/WorkEffortAssocTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortAssocTypeAttr = {
  type: WorkEffortAssocTypeAttrResponseType,
  description: 'mutation for ofbiz createWorkEffortAssocTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortAssocTypeAttrs/add?`, null, req);
  }
};
export {createWorkEffortAssocTypeAttr};


const updateWorkEffortAssocTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortAssocTypeAttr method',
  args:{workEffortAssocTypeAttrToBeUpdated: {type: WorkEffortAssocTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortAssocTypeAttrs/${args.attrName}?`, args.workEffortAssocTypeAttrToBeUpdated, req);
  }
};
export {updateWorkEffortAssocTypeAttr};


const deleteWorkEffortAssocTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortAssocTypeAttrByIdUpdated method',
  args:{workEffortAssocTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortAssocTypeAttrs/${args.workEffortAssocTypeAttrId}?`, null, req);
  }
};
export {deleteWorkEffortAssocTypeAttrByIdUpdated};
