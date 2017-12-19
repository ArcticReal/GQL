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
import {EmplLeaveTypeInputType} from '../../humanres/EmplLeaveType/EmplLeaveTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createEmplLeaveType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEmplLeaveType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplLeave/emplLeaveTypes/add?`, null, req);
  }
};
export {createEmplLeaveType};


const deleteEmplLeaveTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplLeaveTypeByIdUpdated method',
  args:{emplLeaveTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplLeave/emplLeaveTypes/${args.emplLeaveTypeId}?`, null, req);
  }
};
export {deleteEmplLeaveTypeByIdUpdated};


const updateEmplLeaveType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplLeaveType method',
  args:{emplLeaveTypeToBeUpdated: {type: EmplLeaveTypeInputType},leaveTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplLeave/emplLeaveTypes/${args.leaveTypeId}?`, args.emplLeaveTypeToBeUpdated, req);
  }
};
export {updateEmplLeaveType};
