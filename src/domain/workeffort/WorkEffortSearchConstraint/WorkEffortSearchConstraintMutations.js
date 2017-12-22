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
import {WorkEffortSearchConstraintInputType} from '../../workeffort/WorkEffortSearchConstraint/WorkEffortSearchConstraintInputType.js';
import {WorkEffortSearchConstraintResponseType} from '../../workeffort/WorkEffortSearchConstraint/WorkEffortSearchConstraintResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortSearchConstraint = {
  type: WorkEffortSearchConstraintResponseType,
  description: 'mutation for ofbiz createWorkEffortSearchConstraint method',
  args:{workEffortSearchConstraintToBeAdded: {type: WorkEffortSearchConstraintInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortSearchConstraints/add?`, args.workEffortSearchConstraintToBeAdded, req);
  }
};
export {createWorkEffortSearchConstraint};


const updateWorkEffortSearchConstraint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortSearchConstraint method',
  args:{workEffortSearchConstraintToBeUpdated: {type: WorkEffortSearchConstraintInputType},constraintSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortSearchConstraints/${args.constraintSeqId}?`, args.workEffortSearchConstraintToBeUpdated, req);
  }
};
export {updateWorkEffortSearchConstraint};


const deleteWorkEffortSearchConstraintByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortSearchConstraintByIdUpdated method',
  args:{workEffortSearchConstraintId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortSearchConstraints/${args.workEffortSearchConstraintId}?`, null, req);
  }
};
export {deleteWorkEffortSearchConstraintByIdUpdated};
