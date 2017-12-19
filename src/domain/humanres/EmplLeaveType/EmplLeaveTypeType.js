
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

import {EmplLeaveType} from '../../humanres/EmplLeave/EmplLeaveType.js';


const EmplLeaveTypeType = new GraphQLObjectType({
  name: 'EmplLeaveTypeType',
  description: 'Type for EmplLeaveType in humanres',

  fields: () => ({
    parentType: {
      type: EmplLeaveTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (emplLeaveType, args, {loaders}) => loaders.ofbiz.load(`humanres/emplLeave/emplLeaveTypes/find?leaveTypeId=${emplLeaveType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    leaveTypeId: {type: GraphQLString},
    emplLeaveTypes: {
      type: new GraphQLList(EmplLeaveTypeType),
      args : {},
      resolve: (emplLeaveType, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplLeave/emplLeaveTypes/find?leaveTypeId=${emplLeaveType.leaveTypeId}`)
    },
    emplLeaves: {
      type: new GraphQLList(EmplLeaveType),
      args : {},
      resolve: (emplLeaveType, args, {loaders}) => loaders.ofbizArray.load(`humanres/emplLeaves/find?leaveTypeId=${emplLeaveType.leaveTypeId}`)
    }
  })
});

export {EmplLeaveTypeType};
    