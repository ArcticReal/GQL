
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

import {EmplPositionType} from '../humanres/EmplPosition.js';


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
    




const EmplPositionReportingStructInputType = new GraphQLInputObjectType({
  name: 'EmplPositionReportingStructInputType',
  description: 'input type for EmplPositionReportingStruct in humanres',

  fields: () => ({
    fromDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    emplPositionIdManagedBy: {type: GraphQLString},
    emplPositionIdReportingTo: {type: GraphQLString},
    primaryFlag: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionReportingStructInputType};
    