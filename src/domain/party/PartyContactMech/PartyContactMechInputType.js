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

const PartyContactMechInputType = new GraphQLInputObjectType({
  name: 'PartyContactMechInputType',
  description: 'input type for PartyContactMech',

  fields: () => ({
    allowSolicitation: {type: GraphQLBoolean},
    comments: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    extension: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    monthsWithContactMech: {type: GraphQLInt},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    verified: {type: GraphQLBoolean},
    yearsWithContactMech: {type: GraphQLInt}
  })
});

export {PartyContactMechInputType};
    