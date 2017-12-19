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

const TrackingCodeVisitInputType = new GraphQLInputObjectType({
  name: 'TrackingCodeVisitInputType',
  description: 'input type for TrackingCodeVisit',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sourceEnumId: {type: GraphQLString},
    trackingCodeId: {type: GraphQLString},
    visitId: {type: GraphQLString}
  })
});

export {TrackingCodeVisitInputType};
    