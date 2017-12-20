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
import {TimeEntryInputType} from '../../workeffort/TimeEntry/TimeEntryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTimeEntry = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTimeEntry method',
  args:{timeEntryToBeAdded: {type: TimeEntryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/timeEntrys/add?`, args.timeEntryToBeAdded, req);
  }
};
export {createTimeEntry};


const updateTimeEntry = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTimeEntry method',
  args:{timeEntryToBeUpdated: {type: TimeEntryInputType},timeEntryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/timeEntrys/${args.timeEntryId}?`, args.timeEntryToBeUpdated, req);
  }
};
export {updateTimeEntry};


const deleteTimeEntryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTimeEntryByIdUpdated method',
  args:{timeEntryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/timeEntrys/${args.timeEntryId}?`, null, req);
  }
};
export {deleteTimeEntryByIdUpdated};
