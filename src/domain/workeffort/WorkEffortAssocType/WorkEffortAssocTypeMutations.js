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
import {WorkEffortAssocTypeInputType} from '../../workeffort/WorkEffortAssocType/WorkEffortAssocTypeInputType.js';
import {WorkEffortAssocTypeResponseType} from '../../workeffort/WorkEffortAssocType/WorkEffortAssocTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortAssocType = {
  type: WorkEffortAssocTypeResponseType,
  description: 'mutation for ofbiz createWorkEffortAssocType method',
  args:{workEffortAssocTypeToBeAdded: {type: WorkEffortAssocTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortAssocTypes/add?`, args.workEffortAssocTypeToBeAdded, req);
  }
};
export {createWorkEffortAssocType};


const updateWorkEffortAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortAssocType method',
  args:{workEffortAssocTypeToBeUpdated: {type: WorkEffortAssocTypeInputType},workEffortAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortAssocTypes/${args.workEffortAssocTypeId}?`, args.workEffortAssocTypeToBeUpdated, req);
  }
};
export {updateWorkEffortAssocType};


const deleteWorkEffortAssocTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortAssocTypeByIdUpdated method',
  args:{workEffortAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortAssocTypes/${args.workEffortAssocTypeId}?`, null, req);
  }
};
export {deleteWorkEffortAssocTypeByIdUpdated};
