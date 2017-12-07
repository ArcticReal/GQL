
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


const EmplLeaveReasonTypeType = new GraphQLObjectType({
  name: 'EmplLeaveReasonTypeType',
  description: 'Type for EmplLeaveReasonType in humanres',

  fields: () => ({
    parentType: {
      type: EmplLeaveReasonTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (emplLeaveReasonType, args, {loaders}) => loaders.ofbiz.load(`emplLeaveReasonTypes/find?emplLeaveReasonTypeId=${emplLeaveReasonType.parentTypeId}`)
    },
    emplLeaveReasonTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    emplLeave: {
      type: new GraphQLList(EmplLeaveType),
      args : {emplLeaveReasonTypeId: {type: GraphQLString}},
      resolve: (emplLeaveReasonType, args, {loaders}) => loaders.ofbizArray.load(`emplLeaves/find?emplLeaveReasonTypeId=${emplLeaveReasonType.emplLeaveReasonTypeId}`)
    },
    emplLeaveReasonType: {
      type: new GraphQLList(EmplLeaveReasonTypeType),
      args : {emplLeaveReasonTypeId: {type: GraphQLString}},
      resolve: (emplLeaveReasonType, args, {loaders}) => loaders.ofbizArray.load(`emplLeaveReasonTypes/find?emplLeaveReasonTypeId=${emplLeaveReasonType.emplLeaveReasonTypeId}`)
    }
  })
});

export {EmplLeaveReasonTypeType};
    