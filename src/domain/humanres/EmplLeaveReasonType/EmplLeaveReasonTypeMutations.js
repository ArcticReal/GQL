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
import {EmplLeaveReasonTypeInputType} from '../../humanres/EmplLeaveReasonType/EmplLeaveReasonTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createEmplLeaveReasonType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createEmplLeaveReasonType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplLeave/emplLeaveReasonTypes/add?`, null, req);
  }
};
export {createEmplLeaveReasonType};


const updateEmplLeaveReasonType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplLeaveReasonType method',
  args:{emplLeaveReasonTypeToBeUpdated: {type: EmplLeaveReasonTypeInputType},emplLeaveReasonTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplLeave/emplLeaveReasonTypes/${args.emplLeaveReasonTypeId}?`, args.emplLeaveReasonTypeToBeUpdated, req);
  }
};
export {updateEmplLeaveReasonType};


const deleteEmplLeaveReasonTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplLeaveReasonTypeByIdUpdated method',
  args:{emplLeaveReasonTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplLeave/emplLeaveReasonTypes/${args.emplLeaveReasonTypeId}?`, null, req);
  }
};
export {deleteEmplLeaveReasonTypeByIdUpdated};
