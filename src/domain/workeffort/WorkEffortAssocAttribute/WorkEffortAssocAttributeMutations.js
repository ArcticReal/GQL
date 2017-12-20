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
import {WorkEffortAssocAttributeInputType} from '../../workeffort/WorkEffortAssocAttribute/WorkEffortAssocAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortAssocAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortAssocAttribute method',
  args:{workEffortAssocAttributeToBeAdded: {type: WorkEffortAssocAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortAssocAttributes/add?`, args.workEffortAssocAttributeToBeAdded, req);
  }
};
export {createWorkEffortAssocAttribute};


const updateWorkEffortAssocAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortAssocAttribute method',
  args:{workEffortAssocAttributeToBeUpdated: {type: WorkEffortAssocAttributeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortAssocAttributes/${args.nullVal}?`, args.workEffortAssocAttributeToBeUpdated, req);
  }
};
export {updateWorkEffortAssocAttribute};


const deleteWorkEffortAssocAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortAssocAttributeByIdUpdated method',
  args:{workEffortAssocAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortAssocAttributes/${args.workEffortAssocAttributeId}?`, null, req);
  }
};
export {deleteWorkEffortAssocAttributeByIdUpdated};
