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

const PartyDataSourceInputType = new GraphQLInputObjectType({
  name: 'PartyDataSourceInputType',
  description: 'input type for PartyDataSource',

  fields: () => ({
    comments: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    isCreate: {type: GraphQLBoolean},
    partyId: {type: GraphQLString},
    visitId: {type: GraphQLString}
  })
});

export {PartyDataSourceInputType};
    