
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {EmplLeaveType} from '../humanres/EmplLeaveType.js';


const EmplLeaveTypeType = new GraphQLObjectType({
  name: 'EmplLeaveTypeType',
  description: 'Type for EmplLeaveType in humanres',

  fields: () => ({
    parentType: {
      type: EmplLeaveTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (emplLeaveType, args, {loaders}) => loaders.ofbiz.load(`emplLeaveTypes/find?leaveTypeId=${emplLeaveType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    leaveTypeId: {type: GraphQLString},
    emplLeaveType: {
      type: new GraphQLList(EmplLeaveTypeType),
      args : {leaveTypeId: {type: GraphQLString}},
      resolve: (emplLeaveType, args, {loaders}) => loaders.ofbizArray.load(`emplLeaveTypes/find?leaveTypeId=${emplLeaveType.leaveTypeId}`)
    },
    emplLeave: {
      type: new GraphQLList(EmplLeaveType),
      args : {leaveTypeId: {type: GraphQLString}},
      resolve: (emplLeaveType, args, {loaders}) => loaders.ofbizArray.load(`emplLeaves/find?leaveTypeId=${emplLeaveType.leaveTypeId}`)
    }
  })
});

export {EmplLeaveTypeType};
    