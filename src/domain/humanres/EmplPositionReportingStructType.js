
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {EmplPositionType} from '../humanres/EmplPositionType.js';


const EmplPositionReportingStructType = new GraphQLObjectType({
  name: 'EmplPositionReportingStructType',
  description: 'Type for EmplPositionReportingStruct in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    emplPositionManagedBy: {
      type: EmplPositionType,
      args : {emplPositionIdManagedBy: {type: GraphQLString}},
      resolve: (emplPositionReportingStruct, args, {loaders}) => loaders.ofbiz.load(`emplPositions/find?emplPositionId=${emplPositionReportingStruct.emplPositionIdManagedBy}`)
    },
    emplPositionReportingTo: {
      type: EmplPositionType,
      args : {emplPositionIdReportingTo: {type: GraphQLString}},
      resolve: (emplPositionReportingStruct, args, {loaders}) => loaders.ofbiz.load(`emplPositions/find?emplPositionId=${emplPositionReportingStruct.emplPositionIdReportingTo}`)
    },
    primaryFlag: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionReportingStructType};
    