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

const PartyDataSourceResponseType = new GraphQLObjectType({
  name: 'PartyDataSourceResponseType',
  description: 'response type for PartyDataSource',

  fields: () => ({
    comments: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    isCreate: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    visitId: {type: GraphQLString}
  })
});

export {PartyDataSourceResponseType};
    