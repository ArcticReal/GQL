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
import {EmplLeaveInputType} from '../../humanres/EmplLeave/EmplLeaveInputType.js';
import {EmplLeaveResponseType} from '../../humanres/EmplLeave/EmplLeaveResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmplLeave = {
  type: EmplLeaveResponseType,
  description: 'mutation for ofbiz createEmplLeave method',
  args:{emplLeaveToBeAdded: {type: EmplLeaveInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/emplLeaves/add?`, args.emplLeaveToBeAdded, req);
  }
};
export {createEmplLeave};


const deleteEmplLeaveByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteEmplLeaveByIdUpdated method',
  args:{emplLeaveId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/emplLeaves/${args.emplLeaveId}?`, null, req);
  }
};
export {deleteEmplLeaveByIdUpdated};


const updateEmplLeave = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateEmplLeave method',
  args:{emplLeaveToBeUpdated: {type: EmplLeaveInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/emplLeaves/${args.nullVal}?`, args.emplLeaveToBeUpdated, req);
  }
};
export {updateEmplLeave};
