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

const PartyStatusInputType = new GraphQLInputObjectType({
  name: 'PartyStatusInputType',
  description: 'input type for PartyStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {PartyStatusInputType};
    