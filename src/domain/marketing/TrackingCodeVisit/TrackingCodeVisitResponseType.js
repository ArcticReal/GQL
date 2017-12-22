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

const TrackingCodeVisitResponseType = new GraphQLObjectType({
  name: 'TrackingCodeVisitResponseType',
  description: 'response type for TrackingCodeVisit',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sourceEnumId: {type: GraphQLString},
    trackingCodeId: {type: GraphQLString},
    visitId: {type: GraphQLString}
  })
});

export {TrackingCodeVisitResponseType};
    