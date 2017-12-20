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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortTransBox = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortTransBox method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortTransBoxs/add?`, null, req);
  }
};
export {createWorkEffortTransBox};


const updateWorkEffortTransBox = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortTransBox method',
  args:{workEffortTransBoxToBeUpdated: {type: WorkEffortTransBoxInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortTransBoxs/${args.nullVal}?`, args.workEffortTransBoxToBeUpdated, req);
  }
};
export {updateWorkEffortTransBox};


const deleteWorkEffortTransBoxByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortTransBoxByIdUpdated method',
  args:{workEffortTransBoxId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortTransBoxs/${args.workEffortTransBoxId}?`, null, req);
  }
};
export {deleteWorkEffortTransBoxByIdUpdated};
