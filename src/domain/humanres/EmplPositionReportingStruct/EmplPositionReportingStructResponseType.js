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

const EmplPositionReportingStructResponseType = new GraphQLObjectType({
  name: 'EmplPositionReportingStructResponseType',
  description: 'response type for EmplPositionReportingStruct',

  fields: () => ({
    comments: {type: GraphQLString},
    emplPositionIdManagedBy: {type: GraphQLString},
    emplPositionIdReportingTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    primaryFlag: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString}
  })
});

export {EmplPositionReportingStructResponseType};
    