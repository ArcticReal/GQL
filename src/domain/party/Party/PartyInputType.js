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

const PartyInputType = new GraphQLInputObjectType({
  name: 'PartyInputType',
  description: 'input type for Party',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    description: {type: GraphQLString},
    externalId: {type: GraphQLString},
    isUnread: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyTypeId: {type: GraphQLString},
    preferredCurrencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {PartyInputType};
    