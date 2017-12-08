
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

import {EmplLeaveType} from '../humanres/EmplLeave.js';


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
    emplLeaveTypes: {
      type: new GraphQLList(EmplLeaveTypeType),
      args : {leaveTypeId: {type: GraphQLString}},
      resolve: (emplLeaveType, args, {loaders}) => loaders.ofbizArray.load(`emplLeaveTypes/find?leaveTypeId=${emplLeaveType.leaveTypeId}`)
    },
    emplLeaves: {
      type: new GraphQLList(EmplLeaveType),
      args : {leaveTypeId: {type: GraphQLString}},
      resolve: (emplLeaveType, args, {loaders}) => loaders.ofbizArray.load(`emplLeaves/find?leaveTypeId=${emplLeaveType.leaveTypeId}`)
    }
  })
});

export {EmplLeaveTypeType};
    




const EmplLeaveTypeInputType = new GraphQLInputObjectType({
  name: 'EmplLeaveTypeInputType',
  description: 'input type for EmplLeaveType in humanres',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    leaveTypeId: {type: GraphQLString}
  })
});

export {EmplLeaveTypeInputType};
    