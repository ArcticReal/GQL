
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

import {EmplPositionType} from '../../humanres/EmplPosition/EmplPositionType.js';


const EmplPositionReportingStructType = new GraphQLObjectType({
  name: 'EmplPositionReportingStructType',
  description: 'Type for EmplPositionReportingStruct in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    emplPositionManagedBy: {
      type: EmplPositionType,
      args : {emplPositionIdManagedBy: {type: GraphQLString}},
      resolve: (emplPositionReportingStruct, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPositions/find?emplPositionId=${emplPositionReportingStruct.emplPositionIdManagedBy}`)
    },
    emplPositionReportingTo: {
      type: EmplPositionType,
      args : {emplPositionIdReportingTo: {type: GraphQLString}},
      resolve: (emplPositionReportingStruct, args, {loaders}) => loaders.ofbiz.load(`humanres/emplPositions/find?emplPositionId=${emplPositionReportingStruct.emplPositionIdReportingTo}`)
    },
    primaryFlag: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionReportingStructType};
    