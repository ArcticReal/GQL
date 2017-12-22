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
import {WorkEffortTransBoxInputType} from '../../workeffort/WorkEffortTransBox/WorkEffortTransBoxInputType.js';
import {WorkEffortTransBoxResponseType} from '../../workeffort/WorkEffortTransBox/WorkEffortTransBoxResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortTransBox = {
  type: WorkEffortTransBoxResponseType,
  description: 'mutation for ofbiz createWorkEffortTransBox method',
  args:{workEffortTransBoxToBeAdded: {type: WorkEffortTransBoxInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortTransBoxs/add?`, args.workEffortTransBoxToBeAdded, req);
  }
};
export {createWorkEffortTransBox};


const updateWorkEffortTransBox = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortTransBox method',
  args:{workEffortTransBoxToBeUpdated: {type: WorkEffortTransBoxInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortTransBoxs/${args.nullVal}?`, args.workEffortTransBoxToBeUpdated, req);
  }
};
export {updateWorkEffortTransBox};


const deleteWorkEffortTransBoxByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortTransBoxByIdUpdated method',
  args:{workEffortTransBoxId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortTransBoxs/${args.workEffortTransBoxId}?`, null, req);
  }
};
export {deleteWorkEffortTransBoxByIdUpdated};
